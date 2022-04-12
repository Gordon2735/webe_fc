//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    blog-shell     ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import { sharedStylesBlog } from './blog-sharedStyles.js';
import './webe-blog.js';
import './blog-index.js';
import './resources/blog-schemas/blog-schema.js';
import './blog-utility.js';

export class BlogShell extends RenderBlogTemplate {
	constructor() {
		super();

		this.noShadow = true;

		this.addEventListener('openBlog', event =>
			this.querySelector('webe-blog').open(event.detail).preventDefault()
		);
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || blog-shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}

	get template() {
		return `
         
            <webe-blog class="webe-blog"></webe-blog>

            <style>

                webe-shell {
                    ${sharedStylesBlog.trbl}
                    overflow-y: overlay;
                }
            </style>
         
         
         `;
	}
}
customElements.define('blog-shell', BlogShell);
