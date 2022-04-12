//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    login-login    ::::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './loginLog-index.js';

export class LoginLogin extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;
		const root = this.shadowRoot;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	static get observedAttributes() {}
	attributedChangedCallback(name, oldValue, newValue) {}

	get template() {
		return `
        
        <style>
            ${sharedStyles.loginLogin}
        <style>
        
        
        `;
	}
}
