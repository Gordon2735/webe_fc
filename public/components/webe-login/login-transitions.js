import { RenderTemplate } from './render-template.js';

export class LoginTransitions extends RenderTemplate {
	connectedCallback() {
		super.connectedCallback();
	}
}
window.customElements.define('login-transitions', LoginTransitions);
