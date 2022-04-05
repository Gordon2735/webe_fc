import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-index.js';

export class LoginModal extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222222; color: hsl(64, 97%, 45%);'
		);
		// console.info('connectedCallback');
	}
	// static get observedAttributes() {
	// 	return ['modal-open'];
	// }
	attributeChangedCallback(name, oldValue, newValue) {
		// console.info('attributeChangedCallback');
	}
	static get observedProperties() {}
	get template() {
		return `
            <style>
				${sharedStyles.main}	
                ${sharedStyles.modal}
            </style>
            
        `;
	}
	// disconnectedCallback() {
	// 	console.info('disconnectedCallback');
	// }
}
customElements.define('login-modal', LoginModal);
