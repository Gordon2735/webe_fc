'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

// Create Script Tags for our Web Components
const scriptHeader = document.createElement('script');
setAttributes(scriptHeader, {
	type: 'module',
	src: '../components/webe-header/webe-header.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
const scriptNav = document.createElement('script');
setAttributes(scriptNav, {
	type: 'module',
	src: '../components/webe-nav/webe-nav.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
const scriptResponsive = document.createElement('script');
setAttributes(scriptResponsive, {
	type: 'module',
	src: '../components/webe-responsive/webe-responsive.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
const scriptDevtools = document.createElement('script');
setAttributes(scriptDevtools, {
	type: 'module',
	src: '../components/webe-devtools/webe-devtools.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for webe-devtools Web Component',
});
const scriptFooter = document.createElement('script');
setAttributes(scriptFooter, {
	type: 'module',
	src: '../components/webe-footer/webe-footer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});

export default class StartScripts extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('head'),
		});
	}
	render() {
		this.element.appendChild(scriptHeader);
		this.element.appendChild(scriptNav);
		this.element.appendChild(scriptResponsive);
		this.element.appendChild(scriptDevtools);
		this.element.appendChild(scriptFooter);

		return;
	}
}
