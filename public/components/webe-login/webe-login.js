//hw :::::::: HOOT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import appendChildren, {
	main,
	setAttributes,
	divSignupForm,
	divLoginForm,
} from './loginIndex.js';

const divFormsRend = [main, divSignupForm, divLoginForm];
const head = document.querySelector('head');
const title = document.createElement('title');
setAttributes(title, {
	textContent: 'webe-login',
});
export class WebeLogin extends RenderTemplate {
	constructor() {
		super();

		this.addEventListener('click', () =>
			this.dispatchEvent(
				new CustomEvent('openDialog', {
					detail: this.loginData,
					bubbles: true,
					composed: true,
				})
			)
		);

		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222; color: #bada55'
		);
	}

	get template() {
		return `
			
			<script type="module">
    			import './webe-login.js';
			</script>						
		`;
	}
	connectedCallback() {
		head.appendChild(title);
		appendChildren(this.attachShadow({ mode: 'open' }), divFormsRend);
		this.shadowRoot.innerHTML = `
		${sharedStyles.modal}
		${sharedStyles.active}
		<script type="module">							
			function signupToggle() {
				const container = this.shadowRoot.querySelector('.container');
				container.classList.toggle('active');
				const popup = this.shadowRoot.querySelector('.signup-form');
				popup.classList.toggle('active');
			}
			
			function loginToggle() {
				const container = this.shadowRoot.querySelector('.container');
				container.classList.toggle('active');
				const popup = this.shadowRoot.querySelector('.login-form');
				popup.classList.toggle('active');
			}
		</script>`;
	}
}
window.customElements.define('webe-login', WebeLogin);
