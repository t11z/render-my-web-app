export const DEFAULT_TEMPLATE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        background: #0d1117;
        color: #e6edf3;
      }
      h1 { font-size: 2rem; }
      button { padding: 0.6rem 1rem; border-radius: 8px; border: 0; cursor: pointer; }
    </style>
  </head>
  <body>
    <main>
      <h1 id="title">Hello, world! 👋</h1>
      <button id="btn">Click me</button>
    </main>
    <script>
      const btn = document.getElementById('btn');
      let count = 0;
      btn.addEventListener('click', () => {
        count++;
        document.getElementById('title').textContent = 'Clicked ' + count + 'x';
        console.log('clicked', count);
      });
    </script>
  </body>
</html>
`
