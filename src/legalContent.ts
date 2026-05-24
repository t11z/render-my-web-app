import type { Locale } from './i18n'

export interface LegalDoc {
  title: string
  html: string
}

const GH = 'https://github.com/t11z/render-my-web-app'

export const privacy: Record<Locale, LegalDoc> = {
  en: {
    title: 'Privacy & Security – Render My Web App',
    html: `
      <h1>Privacy &amp; Security</h1>
      <h2>1. Zero Knowledge by design</h2>
      <p>Render My Web App is a pure client-side application. The HTML you enter is processed and rendered <strong>exclusively in your browser</strong>. There is no backend that receives your code — <strong>nothing you type is transmitted to any server</strong>. This is the core security guarantee of the project.</p>
      <h2>2. How it works technically</h2>
      <ul>
        <li><strong>Local-only processing.</strong> Editing and rendering happen entirely in your browser; the app ships as static files with no server-side logic.</li>
        <li><strong>Local storage.</strong> Your current document is kept in your browser's <code>localStorage</code> so it survives a reload. It never leaves your device.</li>
        <li><strong>Share links use the URL fragment.</strong> Shareable links store the (compressed) code in the URL fragment — the part after <code>#</code>. Browsers <em>never</em> send the fragment to a server, so the code stays on the client even when you share a link.</li>
        <li><strong>Sandboxed preview.</strong> Your code runs inside an <code>&lt;iframe sandbox&gt;</code> <em>without</em> <code>allow-same-origin</code>, so it gets an opaque origin and cannot read the app's storage, cookies or DOM.</li>
      </ul>
      <h2>3. No tracking, no analytics, no cookies</h2>
      <p>This application contains <strong>no analytics, no third-party trackers and no advertising</strong>. No tracking cookies are set and no usage data is collected. The only data stored is the functional <code>localStorage</code> entry described above.</p>
      <h2>4. Self-hosting</h2>
      <p>Because the app is a set of static, zero-knowledge files, you can host it yourself anywhere that serves static files. When it is hosted, your hosting provider may process technically necessary access data in its server logs (e.g. IP address, time, requested file) — this is standard for any website and is controlled by whoever operates the instance. There is no central service that collects your content.</p>
      <h2>5. External links</h2>
      <p>The app may link to external services (e.g. the source repository on GitHub, or a donation link). You are only connected to those services when you actively click a link; their own privacy terms apply there.</p>
      <h2>6. Open source &amp; transparency</h2>
      <p>This project is open source. The entire source code — including the in-browser data handling — can be inspected and verified at any time: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>`,
  },
  de: {
    title: 'Datenschutz & Sicherheit – Render My Web App',
    html: `
      <h1>Datenschutz &amp; Sicherheit</h1>
      <h2>1. Zero Knowledge als Prinzip</h2>
      <p>Render My Web App ist eine reine Client-Anwendung. Der von dir eingegebene HTML-Code wird <strong>ausschließlich in deinem Browser</strong> verarbeitet und gerendert. Es gibt kein Backend, das deinen Code empfängt — <strong>nichts, was du eingibst, wird an einen Server übertragen</strong>. Das ist die zentrale Sicherheitsgarantie des Projekts.</p>
      <h2>2. Wie es technisch funktioniert</h2>
      <ul>
        <li><strong>Verarbeitung nur lokal.</strong> Bearbeitung und Rendering finden vollständig in deinem Browser statt; die App besteht aus statischen Dateien ohne serverseitige Logik.</li>
        <li><strong>Lokale Speicherung.</strong> Dein aktuelles Dokument wird im <code>localStorage</code> deines Browsers gehalten, damit es ein Neuladen übersteht. Es verlässt dein Gerät nicht.</li>
        <li><strong>Teilen-Links nutzen das URL-Fragment.</strong> Teilbare Links speichern den (komprimierten) Code im URL-Fragment — dem Teil hinter <code>#</code>. Browser senden das Fragment <em>niemals</em> an einen Server, sodass der Code auch beim Teilen auf dem Client bleibt.</li>
        <li><strong>Sandbox-Vorschau.</strong> Dein Code läuft in einem <code>&lt;iframe sandbox&gt;</code> <em>ohne</em> <code>allow-same-origin</code> und erhält damit einen opaken Origin; er kann weder Speicher noch Cookies oder DOM der App lesen.</li>
      </ul>
      <h2>3. Kein Tracking, keine Analyse, keine Cookies</h2>
      <p>Diese Anwendung enthält <strong>keine Analyse-Tools, keine Dritt-Tracker und keine Werbung</strong>. Es werden keine Tracking-Cookies gesetzt und keine Nutzungsdaten erhoben. Gespeichert wird ausschließlich der oben beschriebene funktionale <code>localStorage</code>-Eintrag.</p>
      <h2>4. Self-Hosting</h2>
      <p>Da die App aus statischen Zero-Knowledge-Dateien besteht, kannst du sie überall selbst hosten, wo statische Dateien ausgeliefert werden. Beim Hosting kann dein Hosting-Provider technisch notwendige Zugriffsdaten in seinen Server-Logs verarbeiten (z. B. IP-Adresse, Zeitpunkt, angeforderte Datei) — das ist bei jeder Website üblich und liegt in der Verantwortung der Person, die die Instanz betreibt. Es gibt keinen zentralen Dienst, der deine Inhalte sammelt.</p>
      <h2>5. Externe Links</h2>
      <p>Die App kann auf externe Dienste verlinken (z. B. das Quellcode-Repository auf GitHub oder einen Spenden-Link). Eine Verbindung zu diesen Diensten entsteht erst, wenn du aktiv auf einen Link klickst; dort gelten deren eigene Datenschutzbestimmungen.</p>
      <h2>6. Open Source &amp; Transparenz</h2>
      <p>Dieses Projekt ist Open Source. Der gesamte Quellcode — einschließlich der Datenverarbeitung im Browser — kann jederzeit eingesehen und überprüft werden: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>`,
  },
  es: {
    title: 'Privacidad y seguridad – Render My Web App',
    html: `
      <h1>Privacidad y seguridad</h1>
      <h2>1. Zero Knowledge por diseño</h2>
      <p>Render My Web App es una aplicación puramente de cliente. El código HTML que introduces se procesa y renderiza <strong>exclusivamente en tu navegador</strong>. No existe ningún backend que reciba tu código: <strong>nada de lo que escribes se transmite a ningún servidor</strong>. Esta es la garantía de seguridad central del proyecto.</p>
      <h2>2. Cómo funciona técnicamente</h2>
      <ul>
        <li><strong>Procesamiento solo local.</strong> La edición y el renderizado ocurren por completo en tu navegador; la app son archivos estáticos sin lógica de servidor.</li>
        <li><strong>Almacenamiento local.</strong> Tu documento actual se guarda en el <code>localStorage</code> de tu navegador para sobrevivir a una recarga. Nunca sale de tu dispositivo.</li>
        <li><strong>Los enlaces para compartir usan el fragmento de la URL.</strong> Los enlaces compartibles guardan el código (comprimido) en el fragmento de la URL, la parte después de <code>#</code>. Los navegadores <em>nunca</em> envían el fragmento a un servidor, así que el código permanece en el cliente incluso al compartir un enlace.</li>
        <li><strong>Vista previa en sandbox.</strong> Tu código se ejecuta dentro de un <code>&lt;iframe sandbox&gt;</code> <em>sin</em> <code>allow-same-origin</code>, por lo que obtiene un origen opaco y no puede leer el almacenamiento, las cookies ni el DOM de la app.</li>
      </ul>
      <h2>3. Sin seguimiento, sin analítica, sin cookies</h2>
      <p>Esta aplicación no contiene <strong>analítica, rastreadores de terceros ni publicidad</strong>. No se establecen cookies de seguimiento ni se recopilan datos de uso. Los únicos datos almacenados son la entrada funcional de <code>localStorage</code> descrita arriba.</p>
      <h2>4. Autoalojamiento</h2>
      <p>Como la app es un conjunto de archivos estáticos de conocimiento cero, puedes alojarla tú mismo en cualquier sitio que sirva archivos estáticos. Al alojarla, tu proveedor de alojamiento puede procesar datos de acceso técnicamente necesarios en sus registros de servidor (p. ej., dirección IP, hora, archivo solicitado); esto es habitual en cualquier sitio web y depende de quien opere la instancia. No hay ningún servicio central que recopile tu contenido.</p>
      <h2>5. Enlaces externos</h2>
      <p>La app puede enlazar a servicios externos (p. ej., el repositorio del código fuente en GitHub o un enlace de donación). Solo te conectas a esos servicios cuando haces clic activamente en un enlace; allí se aplican sus propias condiciones de privacidad.</p>
      <h2>6. Código abierto y transparencia</h2>
      <p>Este proyecto es de código abierto. Todo el código fuente —incluido el tratamiento de datos en el navegador— puede consultarse y verificarse en cualquier momento: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>`,
  },
  fr: {
    title: 'Confidentialité et sécurité – Render My Web App',
    html: `
      <h1>Confidentialité et sécurité</h1>
      <h2>1. Zero Knowledge par conception</h2>
      <p>Render My Web App est une application purement côté client. Le code HTML que vous saisissez est traité et rendu <strong>exclusivement dans votre navigateur</strong>. Aucun backend ne reçoit votre code : <strong>rien de ce que vous saisissez n'est transmis à un serveur</strong>. C'est la garantie de sécurité centrale du projet.</p>
      <h2>2. Fonctionnement technique</h2>
      <ul>
        <li><strong>Traitement uniquement local.</strong> L'édition et le rendu se font entièrement dans votre navigateur ; l'app se compose de fichiers statiques sans logique serveur.</li>
        <li><strong>Stockage local.</strong> Votre document actuel est conservé dans le <code>localStorage</code> de votre navigateur afin de survivre à un rechargement. Il ne quitte jamais votre appareil.</li>
        <li><strong>Les liens de partage utilisent le fragment d'URL.</strong> Les liens partageables stockent le code (compressé) dans le fragment de l'URL, la partie après <code>#</code>. Les navigateurs n'envoient <em>jamais</em> le fragment à un serveur, le code reste donc côté client même lors du partage d'un lien.</li>
        <li><strong>Aperçu en sandbox.</strong> Votre code s'exécute dans une <code>&lt;iframe sandbox&gt;</code> <em>sans</em> <code>allow-same-origin</code> ; il obtient ainsi une origine opaque et ne peut lire ni le stockage, ni les cookies, ni le DOM de l'app.</li>
      </ul>
      <h2>3. Aucun suivi, aucune analyse, aucun cookie</h2>
      <p>Cette application ne contient <strong>aucun outil d'analyse, aucun traceur tiers et aucune publicité</strong>. Aucun cookie de suivi n'est déposé et aucune donnée d'usage n'est collectée. Les seules données stockées sont l'entrée fonctionnelle <code>localStorage</code> décrite ci-dessus.</p>
      <h2>4. Auto-hébergement</h2>
      <p>Comme l'app est un ensemble de fichiers statiques « zero knowledge », vous pouvez l'héberger vous-même partout où des fichiers statiques sont servis. Lors de l'hébergement, votre hébergeur peut traiter des données d'accès techniquement nécessaires dans ses journaux serveur (p. ex. adresse IP, horodatage, fichier demandé) ; cela est courant pour tout site web et relève de la responsabilité de la personne qui exploite l'instance. Aucun service central ne collecte vos contenus.</p>
      <h2>5. Liens externes</h2>
      <p>L'app peut renvoyer vers des services externes (p. ex. le dépôt du code source sur GitHub ou un lien de don). Vous n'êtes connecté à ces services que lorsque vous cliquez activement sur un lien ; leurs propres conditions de confidentialité s'y appliquent.</p>
      <h2>6. Open source et transparence</h2>
      <p>Ce projet est open source. L'intégralité du code source — y compris le traitement des données dans le navigateur — peut être consultée et vérifiée à tout moment : <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>`,
  },
  pt: {
    title: 'Privacidade e segurança – Render My Web App',
    html: `
      <h1>Privacidade e segurança</h1>
      <h2>1. Zero Knowledge desde a conceção</h2>
      <p>Render My Web App é uma aplicação puramente do lado do cliente. O código HTML que você insere é processado e renderizado <strong>exclusivamente no seu navegador</strong>. Não existe nenhum backend que receba o seu código: <strong>nada do que você digita é transmitido a qualquer servidor</strong>. Esta é a garantia de segurança central do projeto.</p>
      <h2>2. Como funciona tecnicamente</h2>
      <ul>
        <li><strong>Processamento apenas local.</strong> A edição e a renderização acontecem inteiramente no seu navegador; a app são arquivos estáticos sem lógica de servidor.</li>
        <li><strong>Armazenamento local.</strong> O seu documento atual é mantido no <code>localStorage</code> do seu navegador para sobreviver a um recarregamento. Ele nunca sai do seu dispositivo.</li>
        <li><strong>Os links de compartilhamento usam o fragmento da URL.</strong> Links compartilháveis armazenam o código (comprimido) no fragmento da URL, a parte após <code>#</code>. Os navegadores <em>nunca</em> enviam o fragmento a um servidor, então o código permanece no cliente mesmo ao compartilhar um link.</li>
        <li><strong>Pré-visualização em sandbox.</strong> O seu código é executado dentro de um <code>&lt;iframe sandbox&gt;</code> <em>sem</em> <code>allow-same-origin</code>, recebendo assim uma origem opaca e não conseguindo ler o armazenamento, os cookies ou o DOM da app.</li>
      </ul>
      <h2>3. Sem rastreamento, sem análise, sem cookies</h2>
      <p>Esta aplicação não contém <strong>análise, rastreadores de terceiros nem publicidade</strong>. Não são definidos cookies de rastreamento nem recolhidos dados de uso. Os únicos dados armazenados são a entrada funcional do <code>localStorage</code> descrita acima.</p>
      <h2>4. Auto-hospedagem</h2>
      <p>Como a app é um conjunto de arquivos estáticos de conhecimento zero, você pode hospedá-la por conta própria em qualquer lugar que sirva arquivos estáticos. Ao hospedá-la, o seu provedor de hospedagem pode processar dados de acesso tecnicamente necessários nos registros do servidor (por ex., endereço IP, hora, arquivo solicitado); isto é comum em qualquer site e é de responsabilidade de quem opera a instância. Não há nenhum serviço central que recolha o seu conteúdo.</p>
      <h2>5. Links externos</h2>
      <p>A app pode ter links para serviços externos (por ex., o repositório do código-fonte no GitHub ou um link de doação). Você só se conecta a esses serviços quando clica ativamente em um link; lá aplicam-se as próprias condições de privacidade deles.</p>
      <h2>6. Código aberto e transparência</h2>
      <p>Este projeto é de código aberto. Todo o código-fonte — incluindo o processamento de dados no navegador — pode ser consultado e verificado a qualquer momento: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>`,
  },
  'zh-Hans': {
    title: '隐私与安全 – Render My Web App',
    html: `
      <h1>隐私与安全</h1>
      <h2>1. 以零知识为设计原则</h2>
      <p>Render My Web App 是纯客户端应用。你输入的 HTML 代码<strong>仅在你的浏览器中</strong>处理和渲染。不存在接收你代码的后端——<strong>你输入的任何内容都不会传输到任何服务器</strong>。这是本项目的核心安全保证。</p>
      <h2>2. 技术实现方式</h2>
      <ul>
        <li><strong>仅本地处理。</strong>编辑和渲染完全在你的浏览器中进行；本应用是没有服务器端逻辑的静态文件。</li>
        <li><strong>本地存储。</strong>你当前的文档保存在浏览器的 <code>localStorage</code> 中，以便在重新加载后仍然保留。它绝不会离开你的设备。</li>
        <li><strong>分享链接使用 URL 片段。</strong>可分享的链接将（压缩后的）代码存储在 URL 片段中，即 <code>#</code> 之后的部分。浏览器<em>绝不会</em>将该片段发送到服务器，因此即使分享链接，代码也仍然留在客户端。</li>
        <li><strong>沙箱预览。</strong>你的代码在 <code>&lt;iframe sandbox&gt;</code> 中运行，且<em>没有</em> <code>allow-same-origin</code>，因此它获得一个不透明的来源，无法读取应用的存储、Cookie 或 DOM。</li>
      </ul>
      <h2>3. 无跟踪、无分析、无 Cookie</h2>
      <p>本应用<strong>不含任何分析工具、第三方跟踪器或广告</strong>。不会设置跟踪 Cookie，也不会收集使用数据。唯一存储的数据是上文所述的功能性 <code>localStorage</code> 条目。</p>
      <h2>4. 自托管</h2>
      <p>由于本应用是一组静态的零知识文件，你可以在任何能提供静态文件的地方自行托管它。托管时，你的托管服务商可能会在其服务器日志中处理技术上必要的访问数据（例如 IP 地址、时间、所请求的文件）；这对任何网站都是常见的，并由运营该实例的人负责。不存在收集你内容的中心化服务。</p>
      <h2>5. 外部链接</h2>
      <p>本应用可能链接到外部服务（例如 GitHub 上的源代码仓库或捐赠链接）。只有当你主动点击链接时才会连接到这些服务；届时适用其各自的隐私条款。</p>
      <h2>6. 开源与透明</h2>
      <p>本项目是开源的。全部源代码——包括在浏览器中的数据处理——均可随时查阅和核验：<a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>。</p>`,
  },
}
