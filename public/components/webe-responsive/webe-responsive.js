//info: Left-Side-Pullout-Navigation/Web-Component

'use strict';

const style = document.createElement('style');
const template = document.createElement('template');
const RenderSection = `		
		
<body>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link">
          <span class="link-text logo-text">HOOT<br> Webelistics</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
        </path>
        </svg>
          <span class="link-text">Internet Application Development</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile" class="svg-inline--fa fa-mobile fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
        </path>
        </svg>
          <span class="link-text">Hand-Held-Device Application Development</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" class="svg-inline--fa fa-desktop fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z">
        </path>
        </svg>
          <span class="link-text">Desktop Application Development</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" class="svg-inline--fa fa-users fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
        </path>
        </svg>
          <span class="link-text">Accounts</span>
        </a>
      </li>

      <li class="nav-item" id="themeButton">
        <a href="#" class="nav-link">
          <svg
            class="theme-icon"
            id="lightIcon"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="moon-stars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          <svg
            class="theme-icon"
            id="solarIcon"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="sun"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-sun fa-w-16 fa-7x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          <svg
            class="theme-icon"
            id="darkIcon"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="sunglasses"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
          <span class="link-text">Theme</span>
        </a>
      </li>
    </ul>
  </nav>

  <main>
    <h1>Development is awesome and super Cool</h1>

    <p>
      I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
      iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
      tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
      selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
      venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
    </p>
    <p>
      Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday carry
      retro helvetica stumptown cloud bread squid echo park. Etsy cloud bread
      sartorial quinoa tacos beard mumblecore shaman tumblr pop-up. Twee retro
      fingerstache af helvetica pabst 8-bit leggings taiyaki portland ramps tbh
      tumblr vinyl. Neutra humblebrag bushwick portland subway tile plaid, offal
      scenester flexitarian cliche squid small batch palo santo. Palo santo meh
      adaptogen +1 3 wolf moon, listicle brunch ethical fanny pack everyday
      carry fam. Offal fingerstache taxidermy, man bun venmo PBR&amp;B helvetica
      thundercats everyday carry tote bag artisan cray wolf jianbing.
    </p>
    <p>
      Taxidermy thundercats whatever austin. VHS helvetica ethical, dreamcatcher
      enamel pin YOLO shabby chic locavore man bun crucifix pabst chillwave
      pop-up vegan. Air plant mlkshk ethical echo park tumeric, whatever
      crucifix godard scenester locavore pork belly yuccie vape. +1 gochujang
      put a bird on it, pork belly whatever selfies vaporware occupy banh mi
      normcore VHS. Cornhole normcore hashtag tilde. Hell of yr try-hard DIY raw
      denim banjo, enamel pin irony polaroid copper mug tofu. Dreamcatcher lomo
      literally 90's before they sold out, 3 wolf moon banh mi seitan chambray
      cliche offal tote bag occupy pug.
    </p>
    <p>
      Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh franzen
      viral taxidermy mustache slow-carb crucifix vape. Taiyaki yuccie hell of
      tacos PBR&amp;B, kitsch meggings tbh truffaut kickstarter mixtape af kogi.
      Fingerstache vegan tofu waistcoat gentrify cray. Drinking vinegar 3 wolf
      moon health goth craft beer master cleanse. Letterpress health goth 8-bit
      chillwave craft beer brooklyn. Chicharrones master cleanse 8-bit,
      mumblecore copper mug messenger bag poutine lomo kale chips flannel. Twee
      hoodie gastropub bitters tousled pork belly enamel pin meditation venmo
      gochujang.
    </p>
    <p>
      Next level selfies cronut ethical. Tofu tumblr you probably haven't heard
      of them, man braid literally forage swag chillwave. Pug yr flannel
      tumeric. Coloring book yr chillwave snackwave, shoreditch shaman gentrify
      typewriter tumeric DIY copper mug small batch. Scenester waistcoat YOLO
      hexagon kombucha poke 8-bit meditation. Selvage scenester forage
      williamsburg. Hoodie fingerstache tacos mustache, hashtag quinoa next
      level sartorial craft beer retro disrupt lo-fi.
    </p>
    <p>
      YOLO twee keytar farm-to-table flexitarian cardigan polaroid lumbersexual
      adaptogen drinking vinegar echo park dreamcatcher. Brunch shoreditch
      dreamcatcher iPhone knausgaard plaid edison bulb letterpress ethical yr
      fanny pack. Typewriter portland woke glossier cronut, post-ironic migas
      gentrify letterpress cray brunch lyft 8-bit master cleanse. Pitchfork
      thundercats organic pour-over unicorn lomo.
    </p>   
  </main>
</body>
		  `;

const setAttributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
};
class Responsive extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		console.info(
			'%c This Web-Component has || * FIRED * || webe-responsive.js is connected',
			'background: #222222; color: #FF00FF;'
		);

		setAttributes(style, {
			rel: 'stylesheet',
			type: 'text/css',
		});
		style.innerHTML = `@import "../components/webe-responsive/webe-responsive.css";`;
		this.shadowRoot.appendChild(style);

		template.innerHTML = RenderSection;
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		const themeMap = {
			dark: 'light',
			light: 'solar',
			solar: 'dark',
		};

		let tmp;
		const theme =
			localStorage.getItem('theme') ||
			((tmp = Object.keys(themeMap)[0]),
			localStorage.setItem('theme', tmp),
			tmp);
		const bodyClass = document.body.classList;
		bodyClass.add(theme);

		function toggleTheme() {
			const current = localStorage.getItem('theme');
			const next = themeMap[current];

			bodyClass.replace(current, next);
			localStorage.setItem('theme', next);
		}

		this.shadowRoot.getElementById('themeButton').onclick = toggleTheme;
	}
	disconnectedCallback() {
		this.shadowRoot.removeChild(style);
		this.shadowRoot.removeChild(template);
		this.remove();
		console.info(
			'%c This Web-Component has || * DISCONNECTED * || webe-responsive.js',
			'background: #222222; color: #FF00FF;'
		);
	}
}
window.customElements.define('webe-responsive', Responsive);
