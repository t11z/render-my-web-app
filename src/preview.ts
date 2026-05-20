const BOOTSTRAP = `<script>(function(){
  function ser(v){try{return typeof v==='object'?JSON.stringify(v):String(v)}catch(e){return String(v)}}
  function send(level,args){try{parent.postMessage({__rmwa:true,level:level,args:[].slice.call(args).map(ser)},'*')}catch(e){}}
  ['log','info','warn','error','debug'].forEach(function(m){
    var orig=console[m]?console[m].bind(console):function(){};
    console[m]=function(){send(m,arguments);orig.apply(null,arguments)};
  });
  window.addEventListener('error',function(e){send('error',[e.message+' ('+(e.filename||'')+':'+e.lineno+':'+e.colno+')'])});
  window.addEventListener('unhandledrejection',function(e){send('error',['Unhandled rejection: '+ser(e.reason)])});
})();</scr` + `ipt>`

function injectBootstrap(htmlSource: string): string {
  const head = htmlSource.match(/<head[^>]*>/i)
  if (head) return htmlSource.replace(head[0], head[0] + BOOTSTRAP)
  const htmlTag = htmlSource.match(/<html[^>]*>/i)
  if (htmlTag) return htmlSource.replace(htmlTag[0], htmlTag[0] + BOOTSTRAP)
  return BOOTSTRAP + htmlSource
}

export interface Preview {
  render(content: string): void
}

export function createPreview(iframe: HTMLIFrameElement): Preview {
  return {
    render(content: string) {
      iframe.srcdoc = injectBootstrap(content)
    },
  }
}
