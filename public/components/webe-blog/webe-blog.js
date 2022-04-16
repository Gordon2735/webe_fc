//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    webe-blog     :::::::: )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import { sharedStylesBlog } from './blog-sharedStyles.js';
import { default as renderBlogTags, sectionBlog } from './blog-index.js';

export class WebeBlog extends RenderBlogTemplate {
	static get observedAttributes() {}
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || webe-blog.js is connected',
			'background: #222222; color: hsl(195, 98%, 50%);'
		);

		const root = this.shadowRoot;

		root.appendChild(sectionBlog);
		renderBlogTags();
	}
	get template() {
		return `         
			<style>

				${sharedStylesBlog.blog}				
		
			</style>
		`;
	}
}

customElements.define('webe-blog', WebeBlog);
