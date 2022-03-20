'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

// Create HTML Tags for our Web Components
const webeHeader = document.createElement('webe-header');
setAttributes(webeHeader, {
	id: 'webe-header',
	class: 'webe-header',
	alt: 'Web-Component Header',
});
const webeNav = document.createElement('webe-nav');
setAttributes(webeNav, {
	id: 'webe-nav',
	class: 'webe-nav',
	alt: 'Web-Component Nav',
});
const webeResponsive = document.createElement('webe-responsive');
setAttributes(webeResponsive, {
	id: 'webe-responsive',
	class: 'webe-responsive',
	alt: 'Slideout Menu',
});
const webeDevtools = document.createElement('webe-devtools');
setAttributes(webeDevtools, {
	id: 'webe-devtools',
	class: 'webe-devtools',
	alt: 'webe-devtools Web Component,',
});
const webeFooter = document.createElement('webe-footer');
setAttributes(webeFooter, {
	id: 'webe-footer',
	class: 'webe-footer',
	alt: 'Page Footer',
});

export default class StartComponents extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body'),
		});
	}
	render() {
		this.element.appendChild(webeHeader);
		this.element.appendChild(webeNav);
		this.element.appendChild(webeResponsive);
		this.element.appendChild(webeDevtools);
		this.element.appendChild(webeFooter);
		return;
	}
}
