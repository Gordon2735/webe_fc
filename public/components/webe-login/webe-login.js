//hw :::::::: HOOT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './loginIndex.js';
import appendChildren, {
	main,
	divSignupForm,
	divLoginForm,
	liLoginOne,
	liLoginTwo,
} from './loginIndex.js';
import { signupToggle, loginToggle } from './loginIndex.js';
const divFormsRend = [main, divSignupForm, divLoginForm];

export class WebeLogin extends RenderTemplate {
	static get observedProperties() {}

	constructor() {
		super();

		this.noShadow = false;

		// appendChildren(shadow, divFormsRend);

		// this.attachShadow({ mode: 'open' });
		// liSignup.onclick = () => signupToggle;
		// liLogin.onclick = () => loginToggle;

		// liSignup.setAttribute('class', ' active');
		// liLogin.setAttribute('class', ' active');
		// liSignup.setAttribute('onclick', 'signupToggle');
		// liLogin.setAttribute('onclick', 'loginToggle');
		this.render();
	}
	connectedCallback() {
		super.connectedCallback();
		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222222; color: hsl(246, 98%, 49%);'
		);
		this.shadowRoot.append(main);
		appendChildren(this.shadowRoot, divFormsRend);
		this.shadowRoot.innerHTML = `
		<style>
		${sharedStyles.main}				
		${sharedStyles.login}
		</style>
		`;
		// this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	attributeChangedCallback(name, oldValue, newValue) {}

	// set template(template) {
	// 	this.render();
	// }

	get template() {
		return `		
		

			<script type="module">
				${signupToggle} 
				${loginToggle}
			</script>				
			
		`;
	}
	static get observedAttributes() {
		liLoginOne.setAttribute('class', 'active');
		liLoginTwo.setAttribute('class', 'active');
	}
}

customElements.define('webe-login', WebeLogin);

// const liSignup = this.querySelector('#li-login-one');
// 		const liLogin = this.querySelector('.li-login');
// 		prettier-ignore
// 		let liOne = window.getComputedStyle(liSignup).active;
// 		let lliTwo = window.getComputedStyle(liLogin).onclick;
// 		console.log(liOne);
// 		console.log(lliTwo);

// console.time("While loop");
// while (i < 1000000) {
// 	i++;
// }
// console.timeEnd('While loop');

// console.time('For loop');
//for (i = 0; i < 1000000; i++) {} // For Loop}console.timeEnd("For loop");
