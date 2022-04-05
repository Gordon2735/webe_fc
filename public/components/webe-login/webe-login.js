//hw :::::::: HOOT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-index.js';
import appendChildren, {
	main,
	divSignupForm,
	divLoginForm,
	liLoginOne,
	liLoginTwo,
} from './login-index.js';

const divFormsRend = [main, divSignupForm, divLoginForm];

export class WebeLogin extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;

		const shadowBody = this.shadowRoot;
	}
	connectedCallback() {
		super.connectedCallback();
		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222222; color: hsl(239, 97%, 77%);'
		);

		const shadowBody = this.shadowRoot;

		appendChildren(shadowBody, divFormsRend);

		const home = shadowBody.getElementById('home');
		// home.addEventListener('click', event =>
		// 	shadowBody.dispatchEvent(
		// 		console.log(event.target),
		// 		new CustomEvent('location home.href', {
		// 			bubbles: true,
		// 			cancelable: true,
		// 			composed: true,
		// 			detail: open(url, '/'),
		// 		})
		// 	)
		// );

		const liSignup = shadowBody.getElementById('li-login-one');
		const liLogin = shadowBody.getElementById('li-login-two');

		function signupToggle() {
			const container = shadowBody.querySelector('.container');
			container.classList.toggle('active');
			const popup = shadowBody.querySelector('.signup-form');
			popup.classList.toggle('active');
		}

		function loginsToggle() {
			const container = shadowBody.querySelector('.container');
			container.classList.toggle('active');
			const popup = shadowBody.querySelector('.login-form');
			popup.classList.toggle('active');
		}

		liSignup.addEventListener('click', event => {
			signupToggle();
		});
		liLogin.addEventListener('click', event => {
			loginsToggle();
		});
	}

	get template() {
		return `	

			<style>
				${sharedStyles.main}				
				${sharedStyles.login}
			</style>

			<script type="module">
				function signupToggle() {
					const container = this.shadowRoot.querySelector('.container');
					container.classList.toggle('active');
					const popup = this.shadowRoot.querySelector('.signup-form');
					popup.classList.toggle('active');
				}
		
				function loginsToggle() {
					const container = this.shadowRoot.querySelector('.container');
					container.classList.toggle('active');
					const popup = this.shadowRoot.querySelector('.login-form');
					popup.classList.toggle('active');
				}
			</script>				
			
		`;
	}
	get active() {
		return this.getAttribute('style', 'active: false');
	}
	set active(active) {
		if (active) {
			this.setAttribute('true', active);
		} else {
			this.setAttribute('false');
		}
	}
}

customElements.define('webe-login', WebeLogin);
