//component: webe-footer Web-Component

'use strict';

import { setAttributes } from '../../src/js/webeLibrary.js';

const template = document.createElement('template');
setAttributes(template, {
	id: 'webe-footer',
	class: 'webe-footer',
	alt: 'Web-Component Footer',
});

const style = document.createElement('style');
setAttributes(style, {
	id: 'webe-footer-style',
	type: 'text/css',
	rel: 'stylesheet',
});

const footer = document.createElement('footer');
setAttributes(footer, {
	id: 'footer',
	class: 'footer',
	alt: 'footer information and links',
});

const hootWebelistic = document.createElement('a');
setAttributes(hootWebelistic, {
	id: 'hoot-webelistic',
	class: 'hoot-webelistic',
	href: '/',
	alt: 'HOOT Webelistic',
});

hootWebelistic.innerHTML = `HOOT Webelistics<sup class="register">&#174</sup>`;

const about_us = document.createElement('a');
setAttributes(about_us, {
	id: 'about_us',
	class: 'about_us',
	href: '/about',
	alt: 'about_us Link',
});

about_us.innerHTML = `About Us`;

const apps = document.createElement('a');
setAttributes(apps, {
	id: 'apps',
	class: 'apps',
	href: '/app_packages',
	alt: 'Application Packages Page Link',
});
apps.innerHTML = `Apps`;

const hoot_2022a = document.createElement('a');
setAttributes(hoot_2022a, {
	id: 'hoot_2022',
	class: 'hoot_2022',
	href: '/hoot_2022',
});

hoot_2022a.innerHTML = `HOOT Webelistic 2022`;

const help = document.createElement('a');
setAttributes(help, {
	id: 'help',
	class: 'help',
	href: '/helps',
	alt: 'help Link',
});
help.innerHTML = `Help`;

const contact_us = document.createElement('a');
setAttributes(contact_us, {
	id: 'contact_us',
	class: 'contact_us',
	href: '/contacts',
	alt: 'contact_us Link',
});
contact_us.innerHTML = `Contact Us`;

const RenderFooter = () => {
	footer.appendChild(hootWebelistic);
	footer.appendChild(about_us);
	footer.appendChild(apps);
	footer.appendChild(hoot_2022a);
	footer.appendChild(help);
	footer.appendChild(contact_us);
};
class WebeFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-footer.js is connected',
			'background: #222222; color: #ffff00'
		);

		RenderFooter();
		style.innerHTML = `@import "../components/webe-footer/webe-footer.css";`;
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(footer);
	}
	disconnectedCallback() {
		this.shadowRoot.removeChild(style);
		this.shadowRoot.removeChild(footer);
		console.info(
			'%c This Web Component has been || * DISCONNECTED * || and webe-footer.js is disconnected',
			'background: #222222; color: #FF00FF',
			(error, code) => {
				console.error(error, code);
			}
		);
	}
}

window.customElements.define('webe-footer', WebeFooter);
