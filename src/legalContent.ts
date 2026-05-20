import type { Locale } from './i18n'

export interface LegalDoc {
  title: string
  html: string
}

const GH = 'https://github.com/t11z/render-my-web-app'

export const impressum: Record<Locale, LegalDoc> = {
  en: {
    title: 'Imprint – Render My Web App',
    html: `
      <h1>Imprint</h1>
      <h2>Information pursuant to § 5 DDG</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />Germany</p>
      <h2>Contact</h2>
      <p>Email: [please enter an email address]</p>
      <h2>Responsible for content pursuant to § 18 (2) MStV</h2>
      <p>Thomas Sprock, address as above.</p>
      <h2>Liability for content</h2>
      <p>The contents of these pages were created with the greatest care. However, we cannot guarantee that the contents are accurate, complete or up to date. This application processes code entered by users exclusively locally in the browser; no content is transmitted to our servers.</p>
      <h2>Liability for links</h2>
      <p>Our offer contains links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is always responsible for their content.</p>
      <p><small>Note: This page is a template and does not constitute legal advice. Please have it reviewed and completed by a qualified person before publication (in particular the contact details).</small></p>`,
  },
  de: {
    title: 'Impressum – Render My Web App',
    html: `
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />Deutschland</p>
      <h2>Kontakt</h2>
      <p>E-Mail: [bitte E-Mail-Adresse eintragen]</p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Thomas Sprock, Anschrift wie oben.</p>
      <h2>Haftung für Inhalte</h2>
      <p>Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Diese Anwendung verarbeitet von Nutzern eingegebenen Code ausschließlich lokal im Browser; es werden keine Inhalte an unsere Server übertragen.</p>
      <h2>Haftung für Links</h2>
      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
      <p><small>Hinweis: Diese Seite ist eine Vorlage und ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung von einer fachkundigen Person prüfen und vervollständigen lassen (insbesondere Kontaktangaben).</small></p>`,
  },
  es: {
    title: 'Aviso legal – Render My Web App',
    html: `
      <h1>Aviso legal</h1>
      <h2>Información según el art. 5 DDG</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />Alemania</p>
      <h2>Contacto</h2>
      <p>Correo electrónico: [introduzca una dirección de correo]</p>
      <h2>Responsable del contenido según el art. 18, apdo. 2 MStV</h2>
      <p>Thomas Sprock, dirección como arriba.</p>
      <h2>Responsabilidad por los contenidos</h2>
      <p>Los contenidos de estas páginas se han elaborado con el máximo cuidado. No obstante, no podemos garantizar la exactitud, integridad ni actualidad de los contenidos. Esta aplicación procesa el código introducido por los usuarios exclusivamente de forma local en el navegador; no se transmite ningún contenido a nuestros servidores.</p>
      <h2>Responsabilidad por los enlaces</h2>
      <p>Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Del contenido de las páginas enlazadas siempre es responsable el proveedor u operador correspondiente.</p>
      <p><small>Aviso: Esta página es una plantilla y no constituye asesoramiento jurídico. Por favor, hágala revisar y completar por una persona cualificada antes de su publicación (en particular los datos de contacto).</small></p>`,
  },
  fr: {
    title: 'Mentions légales – Render My Web App',
    html: `
      <h1>Mentions légales</h1>
      <h2>Informations selon l'art. 5 DDG</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />Allemagne</p>
      <h2>Contact</h2>
      <p>E-mail : [veuillez indiquer une adresse e-mail]</p>
      <h2>Responsable du contenu selon l'art. 18, al. 2 MStV</h2>
      <p>Thomas Sprock, adresse comme ci-dessus.</p>
      <h2>Responsabilité concernant les contenus</h2>
      <p>Les contenus de ces pages ont été élaborés avec le plus grand soin. Nous ne pouvons toutefois garantir l'exactitude, l'exhaustivité ni l'actualité des contenus. Cette application traite le code saisi par les utilisateurs exclusivement en local dans le navigateur ; aucun contenu n'est transmis à nos serveurs.</p>
      <h2>Responsabilité concernant les liens</h2>
      <p>Notre offre contient des liens vers des sites web externes de tiers, sur le contenu desquels nous n'avons aucune influence. Le fournisseur ou l'exploitant respectif des pages liées est toujours responsable de leur contenu.</p>
      <p><small>Remarque : cette page est un modèle et ne constitue pas un conseil juridique. Veuillez la faire vérifier et compléter par une personne qualifiée avant publication (notamment les coordonnées de contact).</small></p>`,
  },
  pt: {
    title: 'Aviso legal – Render My Web App',
    html: `
      <h1>Aviso legal</h1>
      <h2>Informações nos termos do § 5 DDG</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />Alemanha</p>
      <h2>Contato</h2>
      <p>E-mail: [insira um endereço de e-mail]</p>
      <h2>Responsável pelo conteúdo nos termos do § 18, n.º 2 MStV</h2>
      <p>Thomas Sprock, endereço conforme acima.</p>
      <h2>Responsabilidade pelo conteúdo</h2>
      <p>Os conteúdos destas páginas foram elaborados com o máximo cuidado. No entanto, não podemos garantir a exatidão, integridade e atualidade dos conteúdos. Esta aplicação processa o código inserido pelos utilizadores exclusivamente de forma local no navegador; nenhum conteúdo é transmitido aos nossos servidores.</p>
      <h2>Responsabilidade pelas ligações</h2>
      <p>A nossa oferta contém ligações para sites externos de terceiros, sobre cujo conteúdo não temos influência. Pelo conteúdo das páginas ligadas é sempre responsável o respetivo fornecedor ou operador.</p>
      <p><small>Nota: Esta página é um modelo e não constitui aconselhamento jurídico. Por favor, mande revê-la e completá-la por uma pessoa qualificada antes da publicação (em particular os dados de contacto).</small></p>`,
  },
  'zh-Hans': {
    title: '法律声明 – Render My Web App',
    html: `
      <h1>法律声明</h1>
      <h2>根据《数字服务法》(DDG) 第 5 条的信息</h2>
      <p>Thomas Sprock<br />Am Kleikamp 26<br />31319 Sehnde<br />德国</p>
      <h2>联系方式</h2>
      <p>电子邮件：[请填写电子邮件地址]</p>
      <h2>根据《媒体国家协议》(MStV) 第 18 条第 2 款对内容负责</h2>
      <p>Thomas Sprock，地址同上。</p>
      <h2>内容责任</h2>
      <p>本页面的内容是以最大的谨慎制作的。但我们无法保证内容的准确性、完整性和时效性。本应用仅在浏览器本地处理用户输入的代码；不会有任何内容传输到我们的服务器。</p>
      <h2>链接责任</h2>
      <p>我们的网站包含指向第三方外部网站的链接，我们对其内容没有任何影响。被链接页面的内容始终由相应的提供者或运营者负责。</p>
      <p><small>提示：本页面为模板，不构成法律建议。请在发布前由具备资质的人员审核并补充完整（尤其是联系方式）。</small></p>`,
  },
}

export const privacy: Record<Locale, LegalDoc> = {
  en: {
    title: 'Privacy Policy – Render My Web App',
    html: `
      <h1>Privacy Policy</h1>
      <h2>1. Controller</h2>
      <p>Thomas Sprock, Am Kleikamp 26, 31319 Sehnde, Germany. Contact: see <a href="/impressum.html">Imprint</a>.</p>
      <h2>2. Principle: Zero Knowledge</h2>
      <p>This application is a pure client-side application. The HTML code you enter is processed and rendered exclusively locally in your browser. <strong>No content is transmitted to our servers.</strong> Storage occurs — where available — in your browser's <code>localStorage</code> and optionally in the URL fragment (the part after <code>#</code>). The URL fragment is technically <em>not</em> sent to servers by browsers.</p>
      <h2>3. Hosting</h2>
      <p>The static files are delivered via Firebase Hosting (Google Ireland Limited / Google LLC). When the files are retrieved, technically necessary access data (e.g. IP address, time, requested file) may be processed by the host. More information: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Privacy</a>.</p>
      <h2>4. Cookies and Google Analytics (only with consent)</h2>
      <p>We use Google Analytics 4 only after your explicit consent via the cookie banner (Google Consent Mode v2; denied by default). Without consent, no analytics cookies are set and no data is transmitted to Google.</p>
      <p>Even with consent given, the code you enter is <strong>not</strong> transmitted to Google: the transmitted page address (<code>page_location</code>) is sent without the URL fragment, so HTML code stored in the fragment does not reach Google.</p>
      <p>You can withdraw your consent at any time by deleting this site's website data in your browser (entry <code>rmwa.consent</code>) and reloading the page. Provider: Google Ireland Limited. More: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.</p>
      <h2>5. Donations via Ko-fi</h2>
      <p>The donation link leads to an external service (Ko-fi). You are only redirected to Ko-fi when you click; the provider's privacy terms apply there.</p>
      <h2>6. Your rights</h2>
      <p>You have the right to information, rectification, erasure, restriction of processing, data portability and objection. You also have the right to lodge a complaint with a data protection supervisory authority.</p>
      <h2>7. Open Source &amp; Transparency</h2>
      <p>This project is open source. The entire source code — including the in-browser data processing — can be inspected and verified at any time: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>
      <p><small>Note: This privacy policy is a template and does not constitute legal advice. Please have it reviewed by a qualified person before publication.</small></p>`,
  },
  de: {
    title: 'Datenschutzerklärung – Render My Web App',
    html: `
      <h1>Datenschutzerklärung</h1>
      <h2>1. Verantwortlicher</h2>
      <p>Thomas Sprock, Am Kleikamp 26, 31319 Sehnde, Deutschland. Kontakt siehe <a href="/impressum.html">Impressum</a>.</p>
      <h2>2. Grundsatz: Zero Knowledge</h2>
      <p>Diese Anwendung ist eine reine Client-Anwendung. Der von dir eingegebene HTML-Code wird ausschließlich lokal in deinem Browser verarbeitet und gerendert. <strong>Inhalte werden nicht an unsere Server übertragen.</strong> Eine Speicherung erfolgt – sofern verfügbar – im <code>localStorage</code> deines Browsers sowie optional im URL-Fragment (der Teil hinter <code>#</code>). Das URL-Fragment wird von Browsern technisch <em>nicht</em> an Server gesendet.</p>
      <h2>3. Hosting</h2>
      <p>Die statischen Dateien werden über Firebase Hosting (Google Ireland Limited / Google LLC) ausgeliefert. Beim Abruf können serverseitig technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt, angeforderte Datei) durch den Hoster verarbeitet werden. Weitere Informationen: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase Datenschutz</a>.</p>
      <h2>4. Cookies und Google Analytics (nur mit Einwilligung)</h2>
      <p>Wir setzen Google Analytics 4 ausschließlich nach deiner ausdrücklichen Einwilligung über das Cookie-Banner ein (Google Consent Mode v2; standardmäßig <code>denied</code>). Ohne Einwilligung werden keine Analyse-Cookies gesetzt und keine Daten an Google übertragen.</p>
      <p>Auch bei erteilter Einwilligung wird der von dir eingegebene Code <strong>nicht</strong> an Google übermittelt: Die übertragene Seitenadresse (<code>page_location</code>) wird ohne das URL-Fragment gesendet, sodass im Fragment gespeicherter HTML-Code Google nicht erreicht.</p>
      <p>Deine Einwilligung kannst du jederzeit widerrufen, indem du die Website-Daten dieser Seite in deinem Browser löschst (Eintrag <code>rmwa.consent</code>) und die Seite neu lädst. Anbieter: Google Ireland Limited. Mehr: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Datenschutzerklärung</a>.</p>
      <h2>5. Spenden über Ko-fi</h2>
      <p>Der Spenden-Link führt zu einem externen Dienst (Ko-fi). Erst beim Klick wirst du zu Ko-fi weitergeleitet; dort gelten die Datenschutzbestimmungen des Anbieters.</p>
      <h2>6. Deine Rechte</h2>
      <p>Dir stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch zu. Außerdem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.</p>
      <h2>7. Open Source &amp; Transparenz</h2>
      <p>Dieses Projekt ist Open Source. Der gesamte Quellcode – einschließlich der Datenverarbeitung im Browser – kann jederzeit eingesehen und überprüft werden: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>
      <p><small>Hinweis: Diese Datenschutzerklärung ist eine Vorlage und ersetzt keine Rechtsberatung. Bitte vor Veröffentlichung fachkundig prüfen lassen.</small></p>`,
  },
  es: {
    title: 'Política de privacidad – Render My Web App',
    html: `
      <h1>Política de privacidad</h1>
      <h2>1. Responsable</h2>
      <p>Thomas Sprock, Am Kleikamp 26, 31319 Sehnde, Alemania. Contacto: véase el <a href="/impressum.html">Aviso legal</a>.</p>
      <h2>2. Principio: Zero Knowledge</h2>
      <p>Esta aplicación es una aplicación puramente de cliente. El código HTML que introduces se procesa y renderiza exclusivamente de forma local en tu navegador. <strong>No se transmite ningún contenido a nuestros servidores.</strong> El almacenamiento se realiza —cuando está disponible— en el <code>localStorage</code> de tu navegador y, opcionalmente, en el fragmento de la URL (la parte después de <code>#</code>). Técnicamente, los navegadores <em>no</em> envían el fragmento de la URL a los servidores.</p>
      <h2>3. Alojamiento</h2>
      <p>Los archivos estáticos se entregan a través de Firebase Hosting (Google Ireland Limited / Google LLC). Al solicitarlos, el proveedor de alojamiento puede procesar datos de acceso técnicamente necesarios (p. ej., dirección IP, fecha y hora, archivo solicitado). Más información: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Privacidad de Firebase</a>.</p>
      <h2>4. Cookies y Google Analytics (solo con consentimiento)</h2>
      <p>Utilizamos Google Analytics 4 únicamente tras tu consentimiento expreso a través del banner de cookies (Google Consent Mode v2; denegado de forma predeterminada). Sin consentimiento, no se establecen cookies de análisis ni se transmiten datos a Google.</p>
      <p>Incluso con el consentimiento otorgado, el código que introduces <strong>no</strong> se transmite a Google: la dirección de la página transmitida (<code>page_location</code>) se envía sin el fragmento de la URL, de modo que el código HTML almacenado en el fragmento no llega a Google.</p>
      <p>Puedes revocar tu consentimiento en cualquier momento eliminando los datos del sitio web de esta página en tu navegador (entrada <code>rmwa.consent</code>) y recargando la página. Proveedor: Google Ireland Limited. Más: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a>.</p>
      <h2>5. Donaciones a través de Ko-fi</h2>
      <p>El enlace de donación conduce a un servicio externo (Ko-fi). Solo se te redirige a Ko-fi cuando haces clic; allí se aplican las condiciones de privacidad del proveedor.</p>
      <h2>6. Tus derechos</h2>
      <p>Tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad de los datos y oposición. Además, tienes derecho a presentar una reclamación ante una autoridad de control de protección de datos.</p>
      <h2>7. Código abierto y transparencia</h2>
      <p>Este proyecto es de código abierto. Todo el código fuente —incluido el tratamiento de datos en el navegador— puede consultarse y verificarse en cualquier momento: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>
      <p><small>Aviso: Esta política de privacidad es una plantilla y no constituye asesoramiento jurídico. Por favor, hágala revisar por una persona cualificada antes de su publicación.</small></p>`,
  },
  fr: {
    title: 'Politique de confidentialité – Render My Web App',
    html: `
      <h1>Politique de confidentialité</h1>
      <h2>1. Responsable</h2>
      <p>Thomas Sprock, Am Kleikamp 26, 31319 Sehnde, Allemagne. Contact : voir les <a href="/impressum.html">mentions légales</a>.</p>
      <h2>2. Principe : Zero Knowledge</h2>
      <p>Cette application est une application purement côté client. Le code HTML que vous saisissez est traité et rendu exclusivement en local dans votre navigateur. <strong>Aucun contenu n'est transmis à nos serveurs.</strong> Le stockage s'effectue — lorsque cela est disponible — dans le <code>localStorage</code> de votre navigateur et, en option, dans le fragment de l'URL (la partie après <code>#</code>). Techniquement, les navigateurs <em>n'envoient pas</em> le fragment de l'URL aux serveurs.</p>
      <h2>3. Hébergement</h2>
      <p>Les fichiers statiques sont fournis via Firebase Hosting (Google Ireland Limited / Google LLC). Lors de leur consultation, des données d'accès techniquement nécessaires (p. ex. adresse IP, horodatage, fichier demandé) peuvent être traitées par l'hébergeur. Plus d'informations : <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Confidentialité Firebase</a>.</p>
      <h2>4. Cookies et Google Analytics (uniquement avec consentement)</h2>
      <p>Nous utilisons Google Analytics 4 uniquement après votre consentement explicite via la bannière de cookies (Google Consent Mode v2 ; refusé par défaut). Sans consentement, aucun cookie d'analyse n'est déposé et aucune donnée n'est transmise à Google.</p>
      <p>Même avec un consentement donné, le code que vous saisissez n'est <strong>pas</strong> transmis à Google : l'adresse de la page transmise (<code>page_location</code>) est envoyée sans le fragment de l'URL, de sorte que le code HTML stocké dans le fragment n'atteint pas Google.</p>
      <p>Vous pouvez retirer votre consentement à tout moment en supprimant les données de site de cette page dans votre navigateur (entrée <code>rmwa.consent</code>) puis en rechargeant la page. Fournisseur : Google Ireland Limited. Plus : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Politique de confidentialité de Google</a>.</p>
      <h2>5. Dons via Ko-fi</h2>
      <p>Le lien de don mène à un service externe (Ko-fi). Vous n'êtes redirigé vers Ko-fi que lorsque vous cliquez ; les conditions de confidentialité du fournisseur s'y appliquent.</p>
      <h2>6. Vos droits</h2>
      <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité des données et d'opposition. Vous avez en outre le droit d'introduire une réclamation auprès d'une autorité de contrôle de la protection des données.</p>
      <h2>7. Open source et transparence</h2>
      <p>Ce projet est open source. L'intégralité du code source — y compris le traitement des données dans le navigateur — peut être consultée et vérifiée à tout moment : <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>
      <p><small>Remarque : cette politique de confidentialité est un modèle et ne constitue pas un conseil juridique. Veuillez la faire vérifier par une personne qualifiée avant publication.</small></p>`,
  },
  pt: {
    title: 'Política de privacidade – Render My Web App',
    html: `
      <h1>Política de privacidade</h1>
      <h2>1. Responsável</h2>
      <p>Thomas Sprock, Am Kleikamp 26, 31319 Sehnde, Alemanha. Contato: ver o <a href="/impressum.html">aviso legal</a>.</p>
      <h2>2. Princípio: Zero Knowledge</h2>
      <p>Esta aplicação é uma aplicação puramente do lado do cliente. O código HTML que você insere é processado e renderizado exclusivamente de forma local no seu navegador. <strong>Nenhum conteúdo é transmitido aos nossos servidores.</strong> O armazenamento ocorre — quando disponível — no <code>localStorage</code> do seu navegador e, opcionalmente, no fragmento da URL (a parte após <code>#</code>). Tecnicamente, os navegadores <em>não</em> enviam o fragmento da URL aos servidores.</p>
      <h2>3. Hospedagem</h2>
      <p>Os arquivos estáticos são entregues através do Firebase Hosting (Google Ireland Limited / Google LLC). Ao serem solicitados, dados de acesso tecnicamente necessários (por ex., endereço IP, data/hora, arquivo solicitado) podem ser processados pelo provedor de hospedagem. Mais informações: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Privacidade do Firebase</a>.</p>
      <h2>4. Cookies e Google Analytics (apenas com consentimento)</h2>
      <p>Utilizamos o Google Analytics 4 apenas após o seu consentimento explícito através do banner de cookies (Google Consent Mode v2; negado por padrão). Sem consentimento, não são definidos cookies de análise nem transmitidos dados ao Google.</p>
      <p>Mesmo com o consentimento concedido, o código que você insere <strong>não</strong> é transmitido ao Google: o endereço da página transmitido (<code>page_location</code>) é enviado sem o fragmento da URL, de modo que o código HTML armazenado no fragmento não chega ao Google.</p>
      <p>Você pode revogar o seu consentimento a qualquer momento, excluindo os dados do site desta página no seu navegador (entrada <code>rmwa.consent</code>) e recarregando a página. Provedor: Google Ireland Limited. Mais: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de Privacidade do Google</a>.</p>
      <h2>5. Doações através do Ko-fi</h2>
      <p>O link de doação leva a um serviço externo (Ko-fi). Você só é redirecionado para o Ko-fi ao clicar; lá aplicam-se as condições de privacidade do provedor.</p>
      <h2>6. Os seus direitos</h2>
      <p>Você tem direito de acesso, retificação, eliminação, limitação do tratamento, portabilidade dos dados e oposição. Além disso, tem o direito de apresentar reclamação a uma autoridade de controlo da proteção de dados.</p>
      <h2>7. Código aberto e transparência</h2>
      <p>Este projeto é de código aberto. Todo o código-fonte — incluindo o processamento de dados no navegador — pode ser consultado e verificado a qualquer momento: <a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>.</p>
      <p><small>Nota: Esta política de privacidade é um modelo e não constitui aconselhamento jurídico. Por favor, mande revê-la por uma pessoa qualificada antes da publicação.</small></p>`,
  },
  'zh-Hans': {
    title: '隐私政策 – Render My Web App',
    html: `
      <h1>隐私政策</h1>
      <h2>1. 责任方</h2>
      <p>Thomas Sprock，Am Kleikamp 26，31319 Sehnde，德国。联系方式：参见<a href="/impressum.html">法律声明</a>。</p>
      <h2>2. 原则：零知识</h2>
      <p>本应用是纯客户端应用。你输入的 HTML 代码仅在你的浏览器本地进行处理和渲染。<strong>不会有任何内容传输到我们的服务器。</strong>在可用的情况下，数据存储在你浏览器的 <code>localStorage</code> 中，以及（可选）存储在 URL 片段（<code>#</code> 之后的部分）中。从技术上讲，浏览器<em>不会</em>将 URL 片段发送到服务器。</p>
      <h2>3. 托管</h2>
      <p>静态文件通过 Firebase Hosting（Google Ireland Limited / Google LLC）提供。在请求文件时，托管服务商可能会处理技术上必要的访问数据（例如 IP 地址、时间、所请求的文件）。更多信息：<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase 隐私</a>。</p>
      <h2>4. Cookie 与 Google Analytics（仅在同意后）</h2>
      <p>我们仅在你通过 Cookie 横幅明确同意后才使用 Google Analytics 4（Google Consent Mode v2；默认拒绝）。未经同意，不会设置分析 Cookie，也不会向 Google 传输任何数据。</p>
      <p>即使在已同意的情况下，你输入的代码也<strong>不会</strong>传输到 Google：所传输的页面地址（<code>page_location</code>）在发送时不包含 URL 片段，因此存储在片段中的 HTML 代码不会到达 Google。</p>
      <p>你可以随时撤回同意，方法是在浏览器中删除本页面的网站数据（条目 <code>rmwa.consent</code>）并重新加载页面。提供商：Google Ireland Limited。更多：<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google 隐私政策</a>。</p>
      <h2>5. 通过 Ko-fi 捐赠</h2>
      <p>捐赠链接指向外部服务（Ko-fi）。只有在你点击时才会被重定向到 Ko-fi；在该网站适用其提供商的隐私条款。</p>
      <h2>6. 你的权利</h2>
      <p>你享有知情、更正、删除、限制处理、数据可携带以及反对的权利。此外，你有权向数据保护监管机构提出投诉。</p>
      <h2>7. 开源与透明</h2>
      <p>本项目是开源的。全部源代码——包括在浏览器中的数据处理——均可随时查阅和核验：<a href="${GH}" target="_blank" rel="noopener">github.com/t11z/render-my-web-app</a>。</p>
      <p><small>提示：本隐私政策为模板，不构成法律建议。请在发布前由具备资质的人员审核。</small></p>`,
  },
}
