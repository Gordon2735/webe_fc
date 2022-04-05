'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './webe-login.js';
import './loginIndex.js';
import './login-modal.js';

const body = document.querySelector('body');
const script = document.createElement('script');

export class ComponentShell extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = true;

		this.addEventListener('openLogin', event =>
			this.querySelector('webe-login').open(event.detail).preventDefault()
		);

		console.info(
			'%c This Web Component has || * FIRED * || component-shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	connectedCallback() {
		super.connectedCallback();
		this.getToggle();

		console.info(
			'%c << || :::::::::: || noShadowRoot is true || :::::::::: || >> ',
			'font-size: small; color: hsl(0, 98%, 63%); letter-spacing: 23px; text-transform: uppercase; opacity: 0.2 0.9; .fade-in;'
		);
		console.info(
			'%c !!!! || When noShadowRoot = false || the Template Renderer will create a Shadow DOM for the component',
			'font-size: normal; color: hsl(90, 100%, 50%);'
		);
	}

	async getToggle() {
		const toggleOne = await import('./loginIndex.js');
		const toggleTwo = await import('./loginIndex.js');

		const toggleSignup = toggleOne.signupToggle;
		const toggleLogin = toggleTwo.loginToggle;

		this.render();
	}

	get template() {
		return `



			<webe-login class="webe-login"></webe-login>
			// <login-modal class="login-modal"></login-modal>				
		
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

				
						
				component-shell {
					${sharedStyles.trbl}
					overflow-y: overlay;
				}							
			</style>

	`;
	}
	static get observedAttributes() {}
}
customElements.define('component-shell', ComponentShell);

// const initRender = () => {
// 	setAttributes(script, {
// 		type: 'module',
// 		content: 'text/javascript',
// 		crossorigin: 'anonymous',
// 		alt: 'Script for Popup',
// 	});
// 	const elementSwitch = (script.innerHTML = `${signupToggle} ${loginToggle}`);
// 	const initialRenderGroup = [script, elementSwitch];
// 	appender(body, initialRenderGroup);
// };
// initRender();

// const jsLogicFunctions = async () => {
// 	if (!this.noShadowRoot === true) {
// 		this.template = this.attachShadow({ mode: 'open' });
// 		this.render();
// 	} else {
// 		this.innerHTML = `${recycle}`;
// 		throw new Error('noShadowRoot is true', () => {
// 			console.error(
// 				'%c noShadowRoot is true',
// 				'font-size: large; color: red; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;',
// 				Error
// 			);
// 		});
// 	}
// 	const recycle = setInterval(() => jsLogicFunctions(), 1000);
// 	setTimeout(() => {
// 		clearInterval(recycle);
// 		alert(
// 			`Recycled the logic function that render's the
// 			"TOGGLE-logic-functions"-Script in the shadowRoot,
// 			but there is still no shadowRoot available;
// 			even after ten seconds of recycling the function; ?`
// 		);
// 	}, 10000);
// };
