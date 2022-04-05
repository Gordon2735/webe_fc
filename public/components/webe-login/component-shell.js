'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './webe-login.js';
import './login-index.js';
import './login-modal.js';
import { anchorHome, anchorAbout } from './login-index.js';
// import { signupToggle, loginsToggle } from './webe-login.js';

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

	getToggle() {}

	get template() {
		return `



			<webe-login class="webe-login">
				<login-index>
					
				</login-index>
			</webe-login>

			<login-modal></login-modal>

							
		
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

				${sharedStyles.main}
						
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

// <login-modal class="login-modal"></login-moda
// ${!!toggleSignup ? toggleSignup : ''}
// 					${!!toggleLogins ? toggleLogins : ''}

/*<material-button class="material-button"></material-button>*/
