//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    login-index     :::::::: )//

'use strict';

import { RenderTemplate } from './render-template.js';

import appendChildren, {
	body,
	setAttributes,
	renderHeadScripts,
	listMaker,
	loopList,
	renderArray,
} from './login-utility.js';
import './login-utility.js';

const scriptLogin = document.createElement('script');
setAttributes(scriptLogin, {
	type: 'module',
	src: '../components/webe-login/webe-login.js',
	crossorigin: 'anonymous',
});
const scriptIndex = document.createElement('script');
setAttributes(scriptIndex, {
	type: 'module',
	src: '../components/webe-login/login-index.js',
	crossorigin: 'anonymous',
});

setAttributes(body, {
	class: 'body-login',
	alt: 'Body of Document',
});

export const main = document.createElement('main');
setAttributes(main, {
	id: 'main',
	class: 'container ',
	alt: 'Main Container',
});
// this.disabled ? "disabled" : "active"
const header = document.createElement('header');
setAttributes(header, {
	id: 'header',
	class: 'header',
	alt: 'Header of Document',
	href: '/',
});

const figure = document.createElement('figure');
setAttributes(figure, {
	id: 'figure',
	class: 'figure',
	alt: 'Logo Image',
	href: '/',
});

const figureImg = document.createElement('img');
setAttributes(figureImg, {
	id: 'owlHead',
	class: 'figure-img',
	src: '../components/webe-login/img_webe-login/head_icononly_transparent_nobuffer.png',
	alt: 'Logo Image',
});

const figcaption = document.createElement('figcaption');
setAttributes(figcaption, {
	class: 'figcaption-text',
	textContent: 'Hoot Webelistics Logo Image',
	alt: 'Logo Image Text',
});

const divLogo = document.createElement('div');
setAttributes(divLogo, {
	id: 'div-logo',
	class: 'logo',
	alt: 'Name Logo of Document',
});

export const h1 = document.createElement('h1');
setAttributes(h1, {
	class: 'h1-logo',
	alt: 'Name Logo of Document',
});
const logoText = (h1.innerHTML =
	'HooT<sup class="h1-tm">&#8482;</sup>  Webelistics<sup class="h1-r"> &#174;</sup>');

const supTM = document.createElement('sup');
setAttributes(supTM, {
	class: 'h1-tm',
	alt: 'Logo Trademark of Document',
});

const supR = document.createElement('sup');
setAttributes(supR, {
	class: 'h1-r',
	alt: 'Logo Registered of Document',
});

const divMenu = document.createElement('div');
setAttributes(divMenu, {
	id: 'div-menu',
	class: 'menu',
	alt: 'Menu of Document',
});

const ulMenu = document.createElement('ul');
setAttributes(ulMenu, {
	class: 'ul-menu',
	alt: 'Menu Unordered List of Document',
});

export const anchorHome = document.createElement('a');
setAttributes(anchorHome, {
	id: 'home',
	class: 'anchor',
	href: '/',
	onclick: 'location.href="/"',
	alt: 'Home Link of Document',
});
const anchorHomeText = (anchorHome.innerHTML = `Home`);

export const anchorAbout = document.createElement('a');
setAttributes(anchorAbout, {
	id: 'about',
	class: 'anchor',
	href: '/about',
	alt: 'About Link of Document',
});
const anchorAboutText = (anchorAbout.innerHTML = `About`);

export const anchorContact = document.createElement('a');
setAttributes(anchorContact, {
	id: 'contact',
	class: 'anchor',
	href: '/contacts',
	alt: 'Contact Link of Document',
});
const anchorContactText = (anchorContact.innerHTML = `Contact Us`);

export const anchorBlog = document.createElement('a');
setAttributes(anchorBlog, {
	id: 'blog',
	class: 'anchor',
	href: '/blog',
	alt: 'Blog Link of Document',
});
const anchorBlogText = (anchorBlog.innerHTML = `Blog`);

export const anchorTodos = document.createElement('a');
setAttributes(anchorTodos, {
	id: 'todos',
	class: 'anchor',
	href: '/todos',
	alt: 'Todos Link of Document',
});
const anchorTodosText = (anchorTodos.innerHTML = `Todos`);

const divLogin = document.createElement('div');
setAttributes(divLogin, {
	class: 'login',
	alt: 'Login of Document',
});

const ulLogin = document.createElement('ul');
setAttributes(ulLogin, {
	class: 'ul-login',
	alt: 'Login Unordered List of Document',
});

export const liLoginOne = document.createElement('li');
setAttributes(liLoginOne, {
	id: 'li-login-one',
	class: 'li-buttons',
	alt: 'Login List Item of Document',
});
const buttoneSignup = (liLoginOne.innerHTML = 'Sign Up');

export const liLoginTwo = document.createElement('li');
setAttributes(liLoginTwo, {
	id: 'li-login-two',
	class: 'li-buttons',
	alt: 'Login List Item of Document',
});
const buttonLogin = (liLoginTwo.innerHTML = 'Login');
// liLoginTwo.onclick = `loginsToggle()`;
// liLoginTwo.setAttribute('onclick', 'loginToggle()');

export const divSignupForm = document.createElement('div');
setAttributes(divSignupForm, {
	class: 'signup-form ',
	alt: 'Signup Form',
});
// this.disabled ? "disabled" : "active"
const divFormOne = document.createElement('div');
setAttributes(divFormOne, {
	class: 'form',
	alt: 'Signup Form Container',
});

export const divSignupClose = document.createElement('div');
setAttributes(divSignupClose, {
	id: 'div-signup-close',
	class: 'signup-close',
	alt: 'Close Signup Form',
});
const signupX = (divSignupClose.innerHTML = '&times;');

export const divSignupText = document.createElement('div');
setAttributes(divSignupText, {
	class: 'text',
	alt: 'Signup Form Text for h1',
});

const h1RegisterForms = document.createElement('h1');
setAttributes(h1RegisterForms, {
	class: 'h1-forms',
	alt: 'Signup & Login Forms Title',
});
const registerForm = (h1RegisterForms.innerHTML = 'Register Form');

const formOne = document.createElement('form');
setAttributes(formOne, {
	action: '#',
	class: 'form-one',
	alt: 'Signup Form',
});

export const divSignupRow = document.createElement('div');
setAttributes(divSignupRow, {
	class: 'row',
	action: '#',
	alt: 'Signup Form Row',
});

const inputFirstName = document.createElement('input');
setAttributes(inputFirstName, {
	class: 'input-name',
	type: 'text',
	placeholder: 'First Name',
	alt: 'First Name Input',
});

const inputLastName = document.createElement('input');
setAttributes(inputLastName, {
	class: 'input-name',
	type: 'text',
	placeholder: 'Last Name',
	alt: 'Last Name Input',
});

const inputEmail = document.createElement('input');
setAttributes(inputEmail, {
	type: 'email',
	placeholder: 'Email ID',
	alt: 'Email ID Input',
});

const inputPassword = document.createElement('input');
setAttributes(inputPassword, {
	type: 'password',
	placeholder: 'Password',
	alt: 'Password Input',
});

const inputConfirmPassword = document.createElement('input');
setAttributes(inputConfirmPassword, {
	type: 'password',
	placeholder: 'Confirm Password',
	alt: 'Confirm Password Input',
});

const inputSubmitRegister = document.createElement('input');
setAttributes(inputSubmitRegister, {
	id: 'input-submit-register',
	type: 'submit',
	value: 'Register',
	alt: 'Submit Register Input',
	class: 'input-register',
});

export const divLoginForm = document.createElement('div');
setAttributes(divLoginForm, {
	class: 'login-form ',
	alt: 'Login Form Container',
});

const divFormTwo = document.createElement('div');
setAttributes(divFormTwo, {
	class: 'form',
	alt: 'Login Form Container',
});

export const divLogClose = document.createElement('div');
setAttributes(divLogClose, {
	id: 'div-log-close',
	class: 'login-close',
	alt: 'Close Login Form',
});
const loginX = (divLogClose.innerHTML = `&times;`);

export const divLogText = document.createElement('div');
setAttributes(divLogText, {
	class: 'text',
	alt: 'Login Form Text',
});

const h1LoginForms = document.createElement('h1');
setAttributes(h1LoginForms, {
	class: 'h1-forms',
	alt: 'Signup & Login Forms Title',
});
const h1Login = (h1LoginForms.innerHTML = `Login`);

const formTwo = document.createElement('form');
setAttributes(formTwo, {
	action: '#',
	class: 'form-two',
	alt: 'Login Form',
});

const inputEmailLogin = document.createElement('input');
setAttributes(inputEmailLogin, {
	type: 'email',
	placeholder: 'Email ID',
	alt: 'Email ID Input',
});

const inputPasswordLogin = document.createElement('input');
setAttributes(inputPasswordLogin, {
	type: 'password',
	placeholder: 'Password',
	alt: 'Password Input',
});

const inputSubmitLogin = document.createElement('input');
setAttributes(inputSubmitLogin, {
	id: 'input-submit-login',
	type: 'submit',
	value: 'Login',
	alt: 'Submit Register Input',
	class: 'input-login',
});

const scriptToggles = document.createElement('script');
setAttributes(scriptToggles, {
	type: 'module',
	alt: 'Script for Login & Signup Toggle',
});

export const webeLogin = document.createElement('webe-login');
setAttributes(webeLogin, {
	id: 'webe-login',
	class: 'webe-login',
	alt: 'webe-login',
});

const scriptsPackage = [scriptLogin, scriptIndex];
const stickyNotes = [
	console.info(
		'%c The login index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color: hsl(59, 100%, 50%);'
	),
	console.info(
		'%c || * NOTES / REMINDER * || :: STUDY ::',
		'background: #222222; color: hsl(59, 100%, 50%);'
	),
	// prettier-ignore
	// console.group(
	// 	'%c Note_One: JavaScripting is so much FUN!! :: I Love it so much!! Need to really study hard to fully understand the "reflection" of properties. A method of taking an elements properties and then mirroring or "reflecting" them into(creating) attributes. We can use the reflection to hook into DOM elements and manipulate their state within the DOM. I love JavaScripting, and to JavaScript is a privilege!!',
	// 'background: #222222; color: hsl(59, 100%, 50%);'),
];

const innerVars = [
	logoText,
	buttoneSignup,
	buttonLogin,
	signupX,
	registerForm,
	loginX,
	h1Login,
	anchorHomeText,
	anchorAboutText,
	anchorContactText,
	anchorBlogText,
	anchorTodosText,
];
const navElements = [figure, divLogo, divMenu, divLogin];
const liMenuElements = [
	anchorHome,
	anchorAbout,
	anchorContact,
	anchorBlog,
	anchorTodos,
];
const liLoginElements = [liLoginOne, liLoginTwo];
const classAttribute = 'li-menu';
const divFormOneElements = [divSignupClose, divSignupText, formOne];
const signupRowInputs = [inputFirstName, inputLastName];
const signupEmailInputs = [
	inputEmail,
	inputPassword,
	inputConfirmPassword,
	inputSubmitRegister,
];
const divFormTwoElements = [divLogClose, divLogText, formTwo];
const loginInputs = [inputEmailLogin, inputPasswordLogin, inputSubmitLogin];

renderHeadScripts(scriptsPackage, stickyNotes);
renderArray(innerVars);
main.appendChild(header);
appendChildren(header, navElements);
figure.appendChild(figureImg);
figure.appendChild(figcaption);
divLogo.appendChild(h1);
divMenu.appendChild(ulMenu);
loopList(liMenuElements, classAttribute, ulMenu);
divLogin.appendChild(ulLogin);
listMaker(liLoginElements, ulLogin);

//< :::: append the signup-form class :::: >//
divSignupForm.appendChild(divFormOne);
appendChildren(divFormOne, divFormOneElements);
divSignupText.appendChild(h1RegisterForms);
formOne.appendChild(divSignupRow);
appendChildren(divSignupRow, signupRowInputs);
appendChildren(formOne, signupEmailInputs);

//< :::: append the login-form class :::: >//
divLoginForm.appendChild(divFormTwo);
appendChildren(divFormTwo, divFormTwoElements);
divLogText.appendChild(h1LoginForms);
appendChildren(formTwo, loginInputs);

export class LoginIndex extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		//< :::: append the container class :::: >//

		console.info(
			'%c This Web Component has || * FIRED * || login-index.js is connected',
			'background: transparent ; color: hsl(313, 98%, 50%);'
		);
	}
}
customElements.define('login-index', LoginIndex);
