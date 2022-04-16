'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const scriptBlogShell = document.createElement('script');
setAttributes(scriptBlogShell, {
	id: 'script-blog-shell',
	type: 'module',
	src: '../components/webe-blog/blog-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for Web-Blog Shell',
});

const blogShell = document.createElement('blog-shell');
setAttributes(blogShell, {
	id: 'blog-shell',
	class: 'blog-shell',
	alt: 'Blog Shell',
});
export default class StartBlogShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body'),
		});
	}
	render() {
		this.element.appendChild(scriptBlogShell);
		this.element.appendChild(blogShell);
		return;
	}
}
