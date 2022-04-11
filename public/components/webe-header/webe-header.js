//component :::: webe-header / Web-Component Logic :::: //

'use strict';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const template = document.createElement('template');
setAttributes(template, {
	id: 'webe-header',
	class: 'webe-header',
	alt: 'Web-Component Header',
});

const style = document.createElement('style');
setAttributes(style, {
	type: 'text/css',
	id: 'webe-header-style',
	rel: 'stylesheet',
});

const header = document.createElement('header');
setAttributes(header, {
	id: 'header',
	class: 'header',
	alt: 'Header of Web Component',
});

const box1 = document.createElement('div');
setAttributes(box1, {
	id: ' box1',
	class: 'box box1',
	alt: 'box1',
});
const box2 = document.createElement('div');
setAttributes(box2, {
	id: ' box2',
	class: 'box box2',
	alt: 'box2',
});
const box3 = document.createElement('div');
setAttributes(box3, {
	id: ' box3',
	class: 'box box3',
	alt: 'box3',
});
const box4 = document.createElement('div');
setAttributes(box4, {
	id: ' box4',
	class: 'box box4',
	alt: 'box4',
});
const box5 = document.createElement('div');
setAttributes(box5, {
	id: ' box5',
	class: 'box box5',
	alt: 'box5',
});
const box6 = document.createElement('div');
setAttributes(box6, {
	id: ' box6',
	class: 'box box6',
	alt: 'box6',
});

const img = document.createElement('img');
setAttributes(img, {
	id: 'logo',
	class: 'logo',
	src: '../components/webe-header/img_webe-header/logo.svg',
	alt: 'HOOT Webelistics® LOGO',
});

const pinguin = document.createElement('img');
setAttributes(pinguin, {
	id: 'pinguin',
	class: 'pinguin',
	src: '../components/webe-header/img_webe-header/pinguin.png',
	alt: 'HOOT Webelistics® Pinguin',
});

const hootTitle = document.createElement('h1');
setAttributes(hootTitle, {
	id: 'hoot-title',
	class: 'hoot-title',
});
hootTitle.innerHTML = 'HOOT';

const jingleTop = document.createElement('h3');
setAttributes(jingleTop, {
	id: 'jingle-top',
	class: 'jingle-top',
	alt: 'HOOT for a "Great" Application!!!',
});
jingleTop.innerHTML = 'HOOT for a "Great" Application!!!';

const hootHeadTrans = document.createElement('img');
setAttributes(hootHeadTrans, {
	id: 'hoot-head-trans',
	class: 'hoot-head-trans',
	src: '../components/webe-header/img_webe-header/HEAD_ONLY_TRANS.png',
	alt: 'Hoot Head Transparent Image',
});

const hamNavButton = document.createElement('a');
setAttributes(hamNavButton, {
	href: '#',
	id: 'hamNavMenu-button',
	class: 'hamNavMenu-button',
	alt: 'hamNavMenu menu button container',
});
const span = document.createElement('span');
setAttributes(span, {
	id: 'bar',
	class: 'bar',
	alt: 'hamburger menu bar line',
});
const webeTitle = document.createElement('h2');
setAttributes(webeTitle, {
	id: 'webe-title',
	class: 'webe-title',
});
webeTitle.innerHTML = `Webelistics<sup class="webe-register">&#174;</sup> `;

const topDown = document.createElement('Nav');
setAttributes(topDown, {
	id: 'top-down',
	class: 'top-down',
	alt: 'top-down MENU NAVIGATION',
});

const RenderTags = () => {
	header.appendChild(box1);
	box1.appendChild(img);
	header.appendChild(box2);
	box2.appendChild(pinguin);
	box2.appendChild(hootTitle);
	box2.appendChild(webeTitle);
	header.appendChild(box3);
	box3.appendChild(hootHeadTrans);
	box3.appendChild(jingleTop);
	header.appendChild(box4);
	box4.appendChild(hamNavButton);
	hamNavButton.appendChild(span);
	hamNavButton.appendChild(span);
	hamNavButton.appendChild(span);
	header.appendChild(box5);
	header.appendChild(box6);
	box6.appendChild(topDown);
};

export default class WebeHeader extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const root = this.attachShadow({ mode: 'open' });
		console.info(
			'%c This Web Component has || * FIRED * || webe-header.js is connected',
			'background: #222222; color: #EE82EE'
		);

		root.appendChild(template.content.cloneNode(true));

		RenderTags();
		style.innerHTML = `@import "../components/webe-header/webe-header.css";`;
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(header);
	}
	disconnectedCallback() {}
	observedAttributes() {}
	adoptiveCallback() {}
}

window.customElements.define('webe-header', WebeHeader);
