//@ :::: HOOT Webelistics®  Web Application Development  :::: @//
//@ :::: Gordon R. Mullen Jr  'Date: 2022/01/20'   :::: @//

//~ :::: Main Application Index.js File :::: ~//

'use strict';

const init = () => {
	const head = document.querySelector('head');
	const body = document.querySelector('body');

	// Set Multiple Attributes
	const setAttributes = (el, attrs) => {
		for (let key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	};
	// generate script tag to bring in the webe-header component module into the DOM
	const script = document.createElement('script');
	setAttributes(script, {
		src: '/public/components/webe-header/webe-header.js',
		type: 'module',
		content: 'text/javascript',
	}); // going to import the CSS module from inside component's JS module
	head.appendChild(script);

	const webeHeader = document.createElement('webe-header');
	setAttributes(webeHeader, {
		id: 'webe-header',
		class: 'webe-header',
		alt: 'Header Web Component',
	});
	body.appendChild(webeHeader);
};

document.addEventListener('DOMContentLoaded', init);
