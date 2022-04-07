//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-index.js';
import appendChildren, {
	main,
	divSignupForm,
	divLoginForm,
} from './login-index.js';

const divFormsRend = [main, divSignupForm, divLoginForm];

export class WebeLogin extends RenderTemplate {
	static get observedAttributes() {
		return ['visibility', 'hidden'];
	}
	attributedChangedCallback(name, oldValue, newValue) {
		if (name === 'visibility') {
			this.hidden = newValue;
		} else if (name === 'hidden') {
			this.hidden = newValue;
		}
	}

	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();
		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222222; color: hsl(239, 97%, 77%);'
		);

		const root = this.shadowRoot;

		appendChildren(root, divFormsRend);

		const liSignup = root.getElementById('li-login-one');
		const signupForm = root.querySelector('.signup-form');
		const mainContainer = root.querySelector('.container');
		const liLogin = root.getElementById('li-login-two');
		const loginForm = root.querySelector('.login-form');

		liSignup.addEventListener('click', () =>
			signupForm.classList.toggle('active')
		);
		liLogin.addEventListener('click', () =>
			loginForm.classList.toggle('active')
		);
	}
	get template() {
		return `	

			
			<style>
				${sharedStyles.login}
			</style>							
			
		`;
	}
	get hidden() {
		return root.hasAttribute('style', 'hidden');
	}
	set hidden(isHidden) {
		if (isHidden) {
			root.setAttribute('visible', '');
		} else {
			root.removeAttribute('hidden');
		}
	}
}

customElements.define('webe-login', WebeLogin);

{
	/* <script type="module">
				export function signupToggle() {
					const container = this.querySelector('.container');
					container.classList.toggle('active');
					const popup = this.querySelector('.signup-form');
					popup.classList.toggle('active');
				}
				
				export function loginsToggle() {
					const container = this.querySelector('.container');
					container.classList.toggle('active');
					const popup = this.querySelector('.login-form');
					popup.classList.toggle('active');
				}
			</script> */
}
