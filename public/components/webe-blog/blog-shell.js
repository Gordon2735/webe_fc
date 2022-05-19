//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    blog-shell     ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import { sharedStylesBlog } from './blog-sharedStyles.js';
import './webe-blog.js';
import './blog-todos.js';
import './blog-index.js';
import './blog-utility.js';
import './todos_index.js';

export class BlogShell extends RenderBlogTemplate {
	constructor() {
		super();

		this.noShadow = true;

		// this.addEventListener('openBlog', event =>
		// 	this.querySelector('webe-blog').open(event.detail).preventDefault()
		// );
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

         
			<blog-todos></blog-todos>
			<webe-blog class="webe-blog"></webe-blog>

            <style>
				@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
        		@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
        		@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        		@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
        
				:root {
					--bg-primary-clr: hsl(0, 0%, 13%);
					--bg-greyLight-clr: hsl(0, 4%, 89%);
					--bg-greyDark-clr: hsl(0, 0%, 71%);
					--webe-header-clr: hsl(32, 83%, 54%);
					--webe-HOOT-clr: hsl(32, 83%, 54%);
					--webe-fontBlack-clr: hsl(0, 0%, 0%);
					--webe-fontDark-clr: hsl(0, 0%, 13%);
					--webe-fontDarkAdj-clr: rgba(33, 33, 33, 0.8);
					--webe-fontWhite-clr: hsl(0, 100%, 100%);
					--webe-fontLight-clr: hsl(0, 3%, 85%);
					--webe-font-clr-freak: hsla(90, 100%, 50%, 0.9);
					--webe-HOOT-fs: 'Chango', cursive;
					--webe-title-fs: 'Days One', sans-serif;
					--webe-poppins-fs: 'Poppins', sans-serif;
					--webe-work-fs: 'Work Sans', sans-serif;
					--webe-fontOrange-text-shadow: hsl(32, 83%, 54%) 2px 1px 2px;
					--webe-fontDark-text-shadow: hsl(0, 0%, 13%) 2px 2px 3px;

				}

				html {
					background-color: var(--bg-primary-clr);
				}


				.blog-todos {
					top: 0;
					left: 0;
				}

				.webe-blog{
					top: 130vh;
					left: 0;
				}


                blog-shell {
                    ${sharedStylesBlog.trbl}
                    overflow-y: overlay;
                }
            </style>
         
         
         `;
	}
}
customElements.define('blog-shell', BlogShell);
