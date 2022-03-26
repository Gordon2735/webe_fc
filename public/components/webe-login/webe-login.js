//hw :::::::: HOOT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

'use strict';

import setAttributes, {
	appendChildren,
	main,
	divSignupForm,
	divLoginForm,
} from './loginIndex.js';

const template = document.createElement('template');

const style = document.createElement('style');
setAttributes(style, {
	rel: 'stylesheet',
	type: 'text/css',
	crossorigin: 'anonymous',
});

const divFormsRend = [main, divSignupForm, divLoginForm];

const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});

function signupToggle() {
	const container = document.querySelector('.container');
	container.classList.toggle('active');
	const popup = document.querySelector('.signup-form');
	popup.classList.toggle('active');
}

function loginToggle() {
	const container = document.querySelector('.container');
	container.classList.toggle('active');
	const popup = document.querySelector('.login-form');
	popup.classList.toggle('active');
}

class WebeLogin extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });

		script.innerHTML = `
			${signupToggle}
			${loginToggle}
		`;
		this.shadowRoot.appendChild(script);
	}

	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222; color: #bada55'
		);

		this.shadowRoot.appendChild(template.content.cloneNode(true));
		const shadowDoc = this.shadowRoot;
		const RenderShadowElements = () => {
			appendChildren(this.shadowRoot, divFormsRend);
		};
		RenderShadowElements();

		style.innerHTML = `@import "/components/webe-login/webe-login.css";`;
		this.shadowRoot.appendChild(style);

		const liOnclick = shadowDoc.querySelector('li');

		liOnclick.onclick = false;
		liOnclick.onclick = true;

		// const li = shadowDoc.querySelectorAll('li');
		// li.addEventListener('onclick', function (e) {
		// 	e.preventDefault(), () => e.signupToggle();
		// });
	}
	attributeChangedCallback(name, oldValue, newValue) {}

	// 	return ['loginToggle', 'signupToggle'];
	// }
	//
	// disconnectedCallback() {
	// 	this.shadowRoot.removeChild(template);
	// 	this.remove();
	// }
}
window.customElements.define('webe-login', WebeLogin);
