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

	const webeHeaderScript = () => {
		const script = document.createElement('script');
		const webeHeader = document.createElement('webe-header');
		setAttributes(script, {
			src: '../components/webe-header/webe-header.js',
			type: 'module',
			content: 'text/javascript',
			crossorigin: 'anonymous',
		});
		head.appendChild(script);
		body.appendChild(webeHeader);
		// going to import the CSS module from inside component's JS module
		setAttributes(webeHeader, {
			id: 'webe-header',
			class: 'webe-header',
			alt: 'Web-Component Header',
		});
	};

	const webeResponsiveScript = () => {
		const script = document.createElement('script');
		const webeResponsive = document.createElement('webe-responsive');
		setAttributes(script, {
			src: '../components/webe-responsive/webe-responsive.js',
			type: 'module',
			content: 'text/javascript',
			crossorigin: 'anonymous',
		});
		head.appendChild(script);
		body.appendChild(webeResponsive);
		// going to import the CSS module from inside component's JS module
		setAttributes(webeResponsive, {
			id: 'webe-responsive',
			class: 'webe-responsive',
		});
	};
	webeHeaderScript();
	webeResponsiveScript();

	// Append the 'generated' HTML to the DOM
};

document.addEventListener('DOMContentLoaded', init);
//%  Initialize and Integrate an 'entrance-point' between the front-end
//% (HTML-JavaScript-CSS) "init" application and the back-end
//% (Node.js-Express_Handlebars-MongoDB ) "Server.js" application
//% by loading DOM Tree and Component Elements into the 'server-side'
//% Handlebars middleware's "Layout Template" main.handlebars.
