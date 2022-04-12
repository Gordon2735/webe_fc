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

const divFormsRender = [main, divSignupForm, divLoginForm];

export class WebeLogin extends RenderTemplate {
	static get observedAttributes() {
		return ['visibility', 'hidden'];
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

		appendChildren(root, divFormsRender);

		const figureClick = root.getElementById('figure');
		const headerLogo = root.getElementById('header');
		const liSignup = root.getElementById('li-login-one');
		const signupForm = root.querySelector('.signup-form');
		const liLogin = root.getElementById('li-login-two');
		const loginForm = root.querySelector('.login-form');
		const signupClose = root.getElementById('div-signup-close');
		const loginClose = root.getElementById('div-log-close');
		const inputSignup = root.getElementById('input-submit-register');
		const inputLogin = root.getElementById('input-submit-login');

		figureClick.addEventListener('click', event => {
			event.preventDefault();
			location.href = '/';
		});
		headerLogo.addEventListener('click', event => {
			event.preventDefault();
			location.href = '/';
		});
		liSignup.addEventListener('click', event => {
			signupForm.classList.toggle('active'), event.stopPropagation();
		});
		liLogin.addEventListener('click', event => {
			loginForm.classList.toggle('active'), event.stopPropagation();
		});
		signupClose.addEventListener('click', () =>
			signupForm.classList.toggle('active')
		);
		inputSignup.addEventListener('click', event => {
			signupForm.classList.toggle('active'), event.stopPropagation();
		});
		loginClose.addEventListener('click', () =>
			loginForm.classList.toggle('active')
		);
		inputLogin.addEventListener('click', event => {
			loginForm.classList.toggle('active'), event.stopPropagation();
		});
	}
	get template() {
		return `
			
			<style>
				${sharedStyles.login}
			</style>							
			
		`;
	}
	attributedChangedCallback(name, oldValue, newValue) {
		if (name === 'visibility') {
			this.hidden = newValue;
		} else if (name === 'hidden') {
			this.hidden = newValue;
		} else if (name === 'visible') {
			this.visible = oldValue;
		}
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
