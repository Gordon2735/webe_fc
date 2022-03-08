//= Tag Generator for the webe-devtools web component in webe_fc (::GUARDING MODULARITY::) =\\

'use strict';

import { head, setAttributes } from '../../src/js/webeLibrary.js';

export const template = document.createElement('template');
setAttributes(template, {
	id: 'template',
	class: 'template',
	alt: 'Web Component Template for rendering the webe-devtools component element.',
});

export const createTags = darkShadowDOM => {
	const script = document.createElement('script');
	const link = document.createElement('link');
	const main = document.createElement('main');
	const imgContainer = document.createElement('div');
	const imgOne = document.createElement('img');
	const section_devtools = document.createElement('section');
	const ul_tools = document.createElement('ul');
	const li_tools = document.createElement('li');
	const h3_tools = document.createElement('h3');
	const p_tools = document.createElement('p');
	const devTool = 'Internet Application Software Package';
	const devToolList = 'Package Development Tools';

	setAttributes(script, {
		type: 'module',
		src: '../components/webe-devtools/tags-devtools.js',
		content: 'text/javascript',
		crossorigin: 'anonymous',
	});
	head.appendChild(script);

	setAttributes(link, {
		rel: 'stylesheet',
		href: '../components/webe-devtools/webe-devtools.css',
		type: 'text/css',
		crossorigin: 'anonymous',
	});
	head.appendChild(link);

	setAttributes(main, {
		id: 'main',
		class: 'main',
		alt: 'Main Element webe-devtools web component html page',
	});

	setAttributes(imgContainer, {
		id: 'img-container',
		class: 'img-container',
		alt: 'Image Container for Viewer',
	});

	setAttributes(imgOne, {
		id: 'img-one',
		class: 'img-one',
		src: '../components/webe-devtools/img_webe-devtools/int_app_basic.png',
		dataset: 'packImage',
		alt: 'Image on dev-tools HTML Page!',
	});

	setAttributes(section_devtools, {
		id: 'section-devtools',
		class: 'section-devtools',
		alt: 'Section Element on the webe-devtools Web Component HTML Page!',
	});

	setAttributes(h3_tools, {
		id: 'p-1',
		class: 'p_1',
		alt: 'paragraph element one',
	});

	setAttributes(p_tools, {
		id: 'p-2',
		class: 'p_2',
		alt: 'paragraph element two',
	});

	setAttributes(ul_tools, {
		id: 'ul-tools',
		class: 'ul-tools',
		dataset: 'ul-data',
		alt: 'UnOrdered List Container',
	});

	setAttributes(li_tools, {
		id: 'li-tools',
		class: 'li-tools',
		dataset: 'li-data',
		alt: 'List from teh UnOrder List Container',
	});

	const RenderTags = () => {
		darkShadowDOM.appendChild(main);
		main.appendChild(imgContainer);
		main.appendChild(section_devtools);
		section_devtools.appendChild(h3_tools);
		section_devtools.appendChild(p_tools);
		section_devtools.appendChild(ul_tools);
		ul_tools.appendChild(li_tools);
		h3_tools.textContent = `${devTool}`;
		p_tools.textContent = `${devToolList}`;
	};
	RenderTags();
};
