import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-transitions.js';
import './webe-login.js';
import './login-dialog.js';

export class ComponentShell extends RenderTemplate {
	constructor() {
		super();

		this.noShadowRoot = true;
		// this.addEventListener('openDialog', e => {
		// 	this.querySelector('login-dialog').open(e.detail);
		// });
	}
	connectedCallback() {
		super.connectedCallback();
	}

	get template() {
		return `
			<style>
				${sharedStyles.trbl}
				component-shell {
					overflow-y: overlay;
				}
			</style>

	

		<webe-login>
		
		${sharedStyles.modal}
		<login-dialog></login-dialog>
		<login-transitions>
		</login-transitions>

		</webe-login>
		`;
	}
}
window.customElements.define('component-shell', ComponentShell);
