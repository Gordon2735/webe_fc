import { RenderTemplate } from './render-template.js';
import './loginIndex.js';

export class LoginModal extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		console.info('connectedCallback');
	}
	// static get observedAttributes() {
	// 	return ['modal-open'];
	// }
	attributeChangedCallback(name, oldValue, newValue) {
		console.info('attributeChangedCallback');
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
	disconnectedCallback() {
		console.info('disconnectedCallback');
	}
}
customElements.define('login-modal', LoginModal);
