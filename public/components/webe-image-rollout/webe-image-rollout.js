'use strict';

import { setAttributes } from '../../src/js/webeLibrary.js';

const style = document.createElement('style');
const styleContent =
	'@import "../components/webe-image-rollout/webe-image-rollout.css";';

const template = document.createElement('template');
const divContainer = document.createElement('div');
const imageText = document.createElement('h3');
const imageAd = document.createElement('img');

setAttributes(template, {
	id: 'template',
	class: 'template',
	alt: 'main image ad component template',
});
setAttributes(divContainer, {
	id: 'div-container',
	class: 'div-container',
	alt: 'container for HOOT Ad text and Picture',
});
setAttributes(imageText, {
	id: 'image-text',
	class: 'image-text',
	alt: 'title over image',
});
setAttributes(imageAd, {
	id: 'imageAd-home',
	class: 'imageAd-home',
	src: '../components/webe-image-rollout/img_webe-image-rollout/HOOT-webe_ad-15.png',
	alt: 'homepage main ad image',
});
setAttributes(style, {
	rel: 'stylesheet',
	type: 'text/css',
	crossorigin: 'anonymous',
});

const RenderTags = () => {
	const imageTextContent =
		"HOOT's Versatile || Software Application Development || Opportunities";
	imageText.textContent = `${imageTextContent}`;
	divContainer.appendChild(imageText);
	divContainer.appendChild(imageAd);
};

class WebeImageRollout extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-image-rollout.js is connected',
			'background: #222222; color: #EE82EE'
		);

		RenderTags();

		style.textContent = `${styleContent}`;
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.appendChild(divContainer);
	}
	disconnectedCallback() {
		this.shadowRoot.removeChild(style);
		this.shadowRoot.removeChild(template);

		console.info(
			'%c This Web Component has been || * DISCONNECTED * || so webe-image-rollout.js is disconnected',
			'background: #222222; color: #FF00FF',
			(error, code) => {
				console.error(error, code);
			}
		);
	}
}

window.customElements.define('webe-image-rollout', WebeImageRollout);
