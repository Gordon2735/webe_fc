//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::   login-register  ::::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-index.js';
import { mainRegister } from './register-index.js';

export class LoginRegister extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		root.appendChild(mainRegister);

		async function hydrateList() {
			fetch(
				'../components/webe-login/resources/webLog-data/webLog-data.json'
			)
				.then(response => response.json())
				.then(data => {
					if (data.length >= 1) {
						appendData(data);
					} else {
						if (data.length === 0) {
							console.log('No data found');
						}
					}
				})
				.catch(error => {
					console.log(error);
				});

			const appendData = data => {
				const ulRegister = root.getElementById('ul-register');
				const liClass = 'li-register';
				for (let i = 0; i < data.length; i++) {
					const liOne = `${data[i].Register.Option_One}`;
					const liTwo = `${data[i].Register.Option_Two}`;
					const liThree = `${data[i].Register.Option_Three}`;
					const liFour = `${data[i].Register.Option_Four}`;
					const liFive = `${data[i].Register.Option_Five}`;
					const dataGrab = [liOne, liTwo, liThree, liFour, liFive];
					console.log(dataGrab);
					dataGrab.forEach(item => {
						const li = document.createElement('li');
						li.append(item);
						li.setAttribute('class', liClass);
						ulRegister.append(li);
					});
				}
			};
		}
		hydrateList();
	}
	get template() {
		return `
        
        <style>
            ${sharedStyles.register}
        <style>
        
        
        `;
	}
	static get observedAttributes() {}
	attributedChangedCallback(name, oldValue, newValue) {}
}

customElements.define('login-register', LoginRegister);
