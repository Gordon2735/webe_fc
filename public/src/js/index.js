//@ :::: HOOT Webelistics®  Web Application Development  :::: @//
//@ :::: Gordon R. Mullen Jr  'Date: 2022/01/20'   :::: @//

//~ :::: Main Application Index.js File :::: ~//

'use strict';

const init = () => {
	const head = document.querySelector('head');
	const body = document.querySelector('body');

	// Ability to "Set Multiple Attributes"
	const setAttributes = (tag, attributes) => {
		for (let key in attributes) {
			tag.setAttribute(key, attributes[key]);
		}
	};
	// generate script tag to bring in the webe-header component module into the DOM

	const RenderWebComponent = () => {
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
			// going to import the CSS module from inside component's JS module
			setAttributes(webeHeader, {
				id: 'webe-header',
				class: 'webe-header',
				alt: 'Web-Component Header',
			});
			body.appendChild(webeHeader);
		};
		const webeResponsiveScript = () => {
			const script = document.createElement('script');
			setAttributes(script, {
				src: '../components/webe-responsive/webe-responsive.js',
				type: 'module',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			head.appendChild(script);
			// going to import the CSS module from inside component's JS module
			const webeResponsive = document.createElement('webe-responsive');
			setAttributes(webeResponsive, {
				id: 'webe-responsive',
				class: 'webe-responsive',
			});
			body.appendChild(webeResponsive);
		};
		const webeCarouselScript = () => {
			const script = document.createElement('script');
			const webeCarousel = document.createElement('webe-carousel');
			setAttributes(script, {
				src: '../components/webe-carousel/webe-carousel.js',
				type: 'module',
				content: 'text/javascript',
				crossorigin: 'anonymous',
			});
			head.appendChild(script);
			// going to import the CSS module from inside component's JS module
			setAttributes(webeCarousel, {
				id: 'webe-carousel',
				class: 'webe-carousel',
			});
			body.appendChild(webeCarousel);
		};

		const webeFooterScript = () => {
			const script = document.createElement('script');
			const webeFooter = document.createElement('webe-footer');
			setAttributes(script, {
				src: '../components/webe-footer/webe-footer.js',
				type: 'module',
				// content: 'text/javascript',
				// crossorigin: 'anonymous',
			});
			head.appendChild(script);
			// going to import the CSS module from inside component's JS module
			setAttributes(webeFooter, {
				id: 'webe-footer',
				class: 'webe-footer',
			});
			body.appendChild(webeFooter);
			const owlScript = () => {
				const script = document.createElement('script');
				setAttributes(script, {
					src: '/src/js/owlMeter.js',
					type: 'module',
					content: 'text/javascript',
					crossorigin: 'anonymous',
				});
				head.appendChild(script);
			};
			owlScript();
		};
		webeHeaderScript();
		webeResponsiveScript();

		//- :::: Append the 'generated' HTML to the DOM :::: -//

		webeCarouselScript();
		webeFooterScript();
	};
	RenderWebComponent();
};

document.addEventListener('DOMContentLoaded', init);
//%  Initialize and Integrate an 'entrance-point' between the front-end
//% (HTML-JavaScript-CSS) "init" application and the back-end
//% (Node.js-Express_Handlebars-MongoDB ) "Server.js" application
//% by loading DOM Tree and Component Elements into the 'server-side'
//% Handlebars middleware's "Layout Template" main.handlebars.
