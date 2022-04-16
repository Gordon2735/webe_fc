//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    blog-index     ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import './blog-utility.js';
import appendChildren, {
	setAttributes,
	renderHeadScripts,
	renderArray,
} from './blog-utility.js';

const scriptIndex = document.createElement('script');
setAttributes(scriptIndex, {
	type: 'module',
	src: '../components/webe-blog/blog-index.js',
	crossorigin: 'anonymous',
});

export const sectionBlog = document.createElement('section');
setAttributes(sectionBlog, {
	id: 'section-blog',
	class: 'section-blog',
	alt: 'Section blog',
});

const blogHeader = document.createElement('header');
setAttributes(blogHeader, {
	id: 'blog-header',
	class: 'blog-header',
	alt: 'Blog header',
});
const blogH1 = document.createElement('h1');
setAttributes(blogH1, {
	id: 'blog-h1',
	class: 'blog-h1',
	alt: 'Blog h1',
});
const blogH1Text = (blogH1.textContent = 'Blogger');

const comments = document.createElement('section');
setAttributes(comments, {
	id: 'comments',
	class: 'comments-container',
	alt: 'Comments',
});
const commentsH2 = document.createElement('h2');
setAttributes(commentsH2, {
	id: 'comments-h2',
	class: 'comments-h2',
	alt: 'Comments h2',
});
const commentsH2Text = (commentsH2.textContent = 'Comments:');

const commentsUl = document.createElement('ul');
setAttributes(commentsUl, {
	id: 'comments-ul',
	class: 'comments-ul',
	alt: 'Comments ul',
});
const commentsUlLi = document.createElement('li');
setAttributes(commentsUlLi, {
	id: 'comments-ul-li',
	class: 'comments-ul-li',
	alt: 'Comments ul li',
});
const commentsUlLiText =
	(commentsUlLi.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita suscipit adipisci placeat reiciendis sed ab! Quas illo rerum laboriosam ratione voluptate quia, ea modi rem officia, quisquam vero maiores.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita suscipit adipisci placeat reiciendis sed ab! Quas illo rerum laboriosam ratione voluptate quia, ea modi rem officia, quisquam vero maiores.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita suscipit adipisci placeat reiciendis sed ab! Quas illo rerum laboriosam ratione voluptate quia, ea modi rem officia, quisquam vero maiores.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita suscipit adipisci placeat reiciendis sed ab! Quas illo rerum laboriosam ratione voluptate quia, ea modi rem officia, quisquam vero maiores.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita suscipit adipisci placeat reiciendis sed ab! Quas illo rerum laboriosam ratione voluptate quia, ea modi rem officia, quisquam vero maiores.`);

const RenderScripts = [scriptIndex];
const stickyNotes = [
	console.info(
		'%c The blog-index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color:hsl(90, 100%, 50%);'
	),
];
const head = document.querySelector('head');
renderHeadScripts(RenderScripts, head, stickyNotes);

const renderCommentElements = [commentsH2, commentsUl];
const renderVars = [blogH1Text, commentsH2Text, commentsUlLiText];

export default function renderBlogTags() {
	sectionBlog.appendChild(blogHeader);
	blogHeader.appendChild(blogH1);
	sectionBlog.appendChild(comments);
	appendChildren(comments, renderCommentElements);
	commentsUl.appendChild(commentsUlLi);
	renderArray(renderVars);
}

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
