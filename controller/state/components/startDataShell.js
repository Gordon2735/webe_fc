'use  strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const head = document.querySelector('head');

const scriptDataShell = document.createElement('script');
setAttributes(scriptDataShell, {
	id: 'script-data-shell',
	type: 'module',
	src: '../components/webe-data/data-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for Web-Data Shell',
});

const dataShell = document.createElement('data-shell');
setAttributes(dataShell, {
	id: 'data-shell',
	class: 'data-shell',
	alt: 'Data Shell',
});

export default class StartDataShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body'),
			elementHead: document.querySelector('head'),
		});
	}
	render() {
		this.element.appendChild(scriptDataShell);
		this.element.appendChild(dataShell);
		return;
	}
}
