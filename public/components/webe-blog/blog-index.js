//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    blog-index     ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import './blog-utility.js';
import appendChildren, {
	body,
	head,
	setAttributes,
	renderHeadScripts,
	appender,
	listMaker,
	loopList,
	renderArray,
} from './blog-utility.js';

const scriptBlog = document.createElement('script');
setAttributes(scriptBlog, {
	type: 'module',
	src: '../components/webe-blog/webe-blog.js',
	crossorigin: 'anonymous',
});
const scriptIndex = document.createElement('script');
setAttributes(scriptIndex, {
	type: 'module',
	src: '../components/webe-blog/blog-index.js',
	crossorigin: 'anonymous',
});

const main = document.querySelector('main');
setAttributes(main, {
	id: 'main',
	class: 'main-container',
	alt: 'main-container',
});

const RenderScripts = [scriptBlog, scriptIndex];
const stickyNotes = [
	console.info(
		'%c The blog-index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color: hsl(59, 100%, 50%);'
	),
];

renderHeadScripts(RenderScripts, stickyNotes);

export class BlogIndex extends RenderBlogTemplate {
	static get observedAttributes() {}
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || blog-index.js is connected',
			'background: #222222; color: hsl(239, 97%, 77%);'
		);
	}

	attributedChangedCallback(name, oldValue, newValue) {}
}

customElements.define('blog-index', BlogIndex);
