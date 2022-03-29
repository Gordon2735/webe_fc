import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';

export class LoginDialog extends RenderTemplate {
	constructor() {
		super();
	}
	close() {}
	get template() {
		return `
            <style>
                ${sharedStyles}
            </style>`;
	}
}
window.customElements.define('login-dialog', LoginDialog);
