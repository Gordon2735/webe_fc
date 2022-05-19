//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::     blog-todos    ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import { sharedStylesBlog } from './blog-sharedStyles.js';
import RenderDocumentElements, { rootElements } from './todos_index.js';
// import TodosModel from '../../../models/schemas/blog-schemas/blog-schema.js';
import { default as appendChildren } from './blog-utility.js';

export class BlogTodos extends RenderBlogTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || blog-todos.js is connected',
			'background: #222222; color: hsl(59, 100%, 50%);'
		);

		const root = this.shadowRoot;

		appendChildren(root, rootElements);
		RenderDocumentElements();
	}
	get template() {
		return `         

			<style>

				:host {
					html {
						background: lightblue;
					}
			
					body {
						width: 100%;
						min-height: 100vh;
						background: lightblue;
						user-select: none;
					}
				}
				${sharedStylesBlog.todos}
			</style>
        `;
	}
}
customElements.define('blog-todos', BlogTodos);
