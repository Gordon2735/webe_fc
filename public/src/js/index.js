//@ :::: HOOT Webelistics®  Web Application Development  :::: @//
//@ :::: Gordon R. Mullen Jr  'Date: 2022/01/20'   :::: @//

//~ :::: Main Application Index.js File :::: ~//

'use strict';

const init = () => {
	const head = document.querySelector('head');
	const body = document.querySelector('body');

	// Set Multiple Attributes
	const setAttributes = (element, attributes) => {
		for (let key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	};
	// generate script tag to bring in the webe-header component module into the DOM
	const script = document.createElement('script');
	setAttributes(script, {
		src: '../components/webe-header/webe-header.js',
		type: 'module',
		content: 'text/javascript',
		crossorigin: 'anonymous',
	}); // going to import the CSS module from inside component's JS module

	const webeHeader = document.createElement('webe-header');

	// Append the 'generated' HTML to the DOM
	head.appendChild(script);
	body.appendChild(webeHeader);
};

document.addEventListener('DOMContentLoaded', init);
//%  Initialize and Integrate an 'entrance-point' between the front-end
//% (HTML-JavaScript-CSS) "init" application and the back-end
//% (Node.js-Express_Handlebars-MongoDB ) "Server.js" application
//% by loading DOM Tree and Component Elements into the 'server-side'
//% Handlebars middleware's "Layout Template" main.handlebars.
