'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const scriptComponentShell = document.createElement('script');
setAttributes(scriptComponentShell, {
	id: 'script-component-shell',
	type: 'module',
	src: '../components/webe-login/component-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for Web-Component Shell'
});

const componentShell = document.createElement('component-shell');
setAttributes(componentShell, {
	id: 'component-shell',
	class: 'component-shell',
	alt: 'Component Shell'
});

export default class StartComponentShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(scriptComponentShell);
		this.element.appendChild(componentShell);
		return;
	}
}
