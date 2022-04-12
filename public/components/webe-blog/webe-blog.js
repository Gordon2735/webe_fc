//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    webe-blog     :::::::: )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import { sharedStylesBlog } from './blog-sharedStyles.js';
import { main } from './resources/blog-schemas/blog-schema.js';

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
			'background: #222222; color: hsl(59, 100%, 50%);'
		);

		main();
		// console.log(BlogPost);
	}

	get template() {
		return `
        
        <style>
			${sharedStylesBlog.root}
            ${sharedStylesBlog.blog}
        </style>
        
        
        `;
	}
	attributedChangedCallback(name, oldValue, newValue) {}
}

customeElements.define('webe-blog', WebeBlog);
