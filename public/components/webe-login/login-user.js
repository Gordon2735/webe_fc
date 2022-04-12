//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::     login-user    :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';

class LoginUser extends RenderTemplate {
	constructor() {
		super();
		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();
	}
	get template() {
		return `
        
            <style>
                ${sharedStyles.user}            
            </style>
        
        `;
	}
}

customElements.define('login-user', LoginUser);
