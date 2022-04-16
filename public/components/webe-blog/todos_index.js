//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    todos-index    ::::::::  )//

'use strict';

import { RenderBlogTemplate } from './render-blog-template.js';
import {
	setAttributes,
	renderHeadScripts,
	appender,
	listMaker,
	renderArray,
} from './blog-utility.js';
import './blog-utility.js';

const head = document.querySelector('head');
const body = document.querySelector('body');

const scriptUtility = document.createElement('script');
setAttributes(scriptUtility, {
	type: 'module',
	src: '../components/webe-blog/blog-utility.js',
	crossorigin: 'anonymous',
	content: 'text/javascript',
});

setAttributes(body, {
	id: 'body',
	class: 'document-body',
	alt: 'Document body',
});

const todosHeader = document.createElement('header');
setAttributes(todosHeader, {
	id: 'todos-header',
	class: 'todos-header',
	alt: 'Todos header',
});
const todosH1 = document.createElement('h1');
setAttributes(todosH1, {
	id: 'todos-h1',
	class: 'todos-h1',
	alt: 'todos-h1',
});
const todosH1Text = (todosH1.textContent = 'Todo List');

const todosH2 = document.createElement('h2');
setAttributes(todosH2, {
	id: 'todos-h2',
	class: 'todos-h2',
	alt: 'todos-h2',
});
const todosH2Text = (todosH2.textContent =
	'Experimenting with MongoDB, Mongoose Database Connection');

const todosMain = document.createElement('main');
setAttributes(todosMain, {
	id: 'todos-main',
	class: 'todos-main-container',
	alt: 'Todos main',
});

const sectionFirst = document.createElement('section');
setAttributes(sectionFirst, {
	id: 'section-first',
	class: 'section-first',
	alt: 'Section first',
});

const sectionFirstH3 = document.createElement('h3');
setAttributes(sectionFirstH3, {
	id: 'section-first-h3',
	class: 'section-first-h3',
	alt: 'Section first h3',
});
const sectionFirstH3Text = (sectionFirstH3.textContent =
	'Mongoose Database Connection');

const sectionFirstP = document.createElement('p');
setAttributes(sectionFirstP, {
	id: 'section-first-p',
	class: 'section-first-p',
	alt: 'Section first p',
});
const sectionFirstPText = (sectionFirstP.textContent =
	'Mongoose is a Node.js library for MongoDB that provides a familiar' +
	' interface for creating schema oriented applications.');

const sectionSecond = document.createElement('section');
setAttributes(sectionSecond, {
	id: 'section-second',
	class: 'section-second',
	alt: 'Section second',
});

const sectionSecondH3 = document.createElement('h3');
setAttributes(sectionSecondH3, {
	id: 'section-second-h3',
	class: 'section-second-h3',
	alt: 'Section second h3',
});
const sectionSecondH3Text = (sectionSecondH3.textContent = 'Mongoose Schema');

const sectionSecondP = document.createElement('p');
setAttributes(sectionSecondP, {
	id: 'section-second-p',
	class: 'section-second-p',
	alt: 'Section second p',
});
const sectionSecondPText = (sectionSecondP.textContent =
	'Mongoose Schema is a class that defines the structure of a document' +
	' in MongoDB. It is used to define the shape of the documents in the' +
	' database.');

const RenderScripts = [scriptUtility];
const rootElements = [todosHeader, todosMain];
const RenderElements = [todosH1, todosH2];
const RenderMainElements = [sectionFirst, sectionSecond];
const RenderSectionFirstElements = [sectionFirstH3, sectionFirstP];
const RenderSectionSecondElements = [sectionSecondH3, sectionSecondP];
const RenderVars = [
	todosH1Text,
	todosH2Text,
	sectionFirstPText,
	sectionSecondPText,
	sectionFirstH3Text,
	sectionSecondH3Text,
];
const stickyNotes = [
	console.info(
		'%c The todos-index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color: hsl(313, 98%, 50%);'
	),
];
renderHeadScripts(RenderScripts, head, stickyNotes);

const RenderDocumentElements = () => {
	listMaker(RenderElements, todosHeader);
	listMaker(RenderMainElements, todosMain);
	appender(sectionFirst, RenderSectionFirstElements);
	appender(sectionSecond, RenderSectionSecondElements);
	renderArray(RenderVars);
};

export class TodosIndex extends RenderBlogTemplate {
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
}

customElements.define('todos-index', TodosIndex);

export { RenderDocumentElements as default, rootElements };
