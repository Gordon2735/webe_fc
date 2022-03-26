'use strict';

const body = document.querySelector('body');

export default function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

export const appendChildren = (parent, children) => {
	children.forEach(child => {
		parent.appendChild(child);
	});
};

const listMaker = (list, element) => {
	list.forEach(item => {
		element.append(item);
	});
};

const loopList = (list, element, attribute) => {
	list.forEach(item => {
		const li = document.createElement('li');
		li.append(item);
		li.setAttribute('class', attribute);
		element.appendChild(li);
	});
};

const title = document.createElement('title');
setAttributes(title, {
	textContent: 'webe-login',
});

setAttributes(body, {
	class: 'body-login',
	alt: 'Body of Document',
});

export const main = document.createElement('main');
setAttributes(main, {
	class: 'container',
	alt: 'Main Container',
});

const header = document.createElement('header');
setAttributes(header, {
	class: 'header',
	alt: 'Header of Document',
});

const figure = document.createElement('figure');
setAttributes(figure, {
	class: 'figure-img',
	src: '../components/webe-login/img_webe-login/Hoot-Webelistics-400X320.png',
	alt: 'Logo Image',
});

const figcaption = document.createElement('figcaption');
setAttributes(figcaption, {
	class: 'figcaption-text',
	textContent: 'Hoot Webelistics Logo Image',
	alt: 'Logo Image Text',
});

const nav = document.createElement('nav');
setAttributes(nav, {
	class: 'nav',
	alt: 'Navigation of Document',
});

const divLogo = document.createElement('div');
setAttributes(divLogo, {
	class: 'logo',
	alt: 'Name Logo of Document',
});

const h1 = document.createElement('h1');
setAttributes(h1, {
	class: 'h1-logo',
	alt: 'Name Logo of Document',
});

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

h1.innerHTML = `
HooT<sup class="h1-tm"> &#8482;</sup>Webelistics<sup class="h1-r"> &#174;</sup>`;

const divMenu = document.createElement('div');
setAttributes(divMenu, {
	class: 'menu',
	alt: 'Menu of Document',
});

const ulMenu = document.createElement('ul');
setAttributes(ulMenu, {
	class: 'ul-menu',
	alt: 'Menu Unordered List of Document',
});

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

const liLoginOne = document.createElement('li');
setAttributes(liLoginOne, {
	id: 'li-login-one',
	class: 'li-login',
	onclick: 'signupToggle()',
	alt: 'Login List Item of Document',
});
liLoginOne.innerHTML = `Sign Up`;

const liLoginTwo = document.createElement('li');
setAttributes(liLoginTwo, {
	id: 'li-login-two',
	class: 'li-login',
	onclick: 'loginToggle()',
	alt: 'Login List Item of Document',
});
liLoginTwo.innerHTML = `Login`;

export const divSignupForm = document.createElement('div');
setAttributes(divSignupForm, {
	class: 'signup-form',
	alt: 'Signup Form',
});

const divFormOne = document.createElement('div');
setAttributes(divFormOne, {
	class: 'form',
	alt: 'Signup Form Container',
});

const divSignupClose = document.createElement('div');
setAttributes(divSignupClose, {
	id: 'div-signup-close',
	class: 'close',
	onclick: 'signupToggle()',
	alt: 'Close Signup Form',
});
divSignupClose.innerHTML = `&times;`;

const divSignupText = document.createElement('div');
setAttributes(divSignupText, {
	class: 'text',
	alt: 'Signup Form Text for h1',
});

const h1RegisterForms = document.createElement('h1');
setAttributes(h1RegisterForms, {
	class: 'h1-forms',
	alt: 'Signup & Login Forms Title',
});
h1RegisterForms.innerHTML = 'Register';

const formOne = document.createElement('form');
setAttributes(formOne, {
	action: '#',
	alt: 'Signup Form',
});

const divSignupRow = document.createElement('div');
setAttributes(divSignupRow, {
	class: 'row',
	action: '#',
	alt: 'Signup Form Row',
});

const inputFirstName = document.createElement('input');
setAttributes(inputFirstName, {
	type: 'text',
	placeholder: 'First Name',
	alt: 'First Name Input',
});

const inputLastName = document.createElement('input');
setAttributes(inputLastName, {
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
	type: 'submit',
	value: 'Register',
	alt: 'Submit Register Input',
});

export const divLoginForm = document.createElement('div');
setAttributes(divLoginForm, {
	class: 'login-form',
	alt: 'Login Form Container',
});

const divFormTwo = document.createElement('div');
setAttributes(divFormTwo, {
	class: 'form',
	alt: 'Login Form Container',
});
const divLogClose = document.createElement('div');
setAttributes(divLogClose, {
	id: 'div-log-close',
	class: 'close',
	onclick: 'loginToggle()',
	alt: 'Close Login Form',
});
divLogClose.innerHTML = `&times;`;

const divLogText = document.createElement('div');
setAttributes(divLogText, {
	class: 'text',
	alt: 'Login Form Text',
});

const h1LoginForms = document.createElement('h1');
setAttributes(h1LoginForms, {
	class: 'h1-forms',
	alt: 'Signup & Login Forms Title',
});
h1LoginForms.innerHTML = 'Login';

const formTwo = document.createElement('form');
setAttributes(formTwo, {
	action: '#',
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
	type: 'submit',
	value: 'Register',
	alt: 'Submit Register Input',
});
//
//< :::: append the container class :::: >//
const navElements = [divLogo, divMenu, divLogin];
const liMenuElements = ['Home', 'About', 'Contact'];
const liLoginElements = [liLoginOne, liLoginTwo];
const classAttribute = 'li-menu';

main.appendChild(header);
header.appendChild(nav);
appendChildren(nav, navElements);
divLogo.appendChild(h1);
nav.appendChild(divMenu);
divMenu.appendChild(ulMenu);
loopList(liMenuElements, ulMenu, classAttribute);
nav.appendChild(divLogin);
divLogin.appendChild(ulLogin);
listMaker(liLoginElements, ulLogin);
//
//
//< :::: append the signup-form class :::: >//
const divFormOneElements = [divSignupClose, divSignupText, formOne];
const signupRowInputs = [inputFirstName, inputLastName];
const signupEmailInputs = [
	inputEmail,
	inputPassword,
	inputConfirmPassword,
	inputSubmitRegister,
];
divSignupForm.appendChild(divFormOne);
appendChildren(divFormOne, divFormOneElements);
divSignupText.appendChild(h1RegisterForms);
formOne.appendChild(divSignupRow);
appendChildren(divSignupRow, signupRowInputs);
appendChildren(formOne, signupEmailInputs);
//
//
//< :::: append the login-form class :::: >//
const divFormTwoElements = [divLogClose, divLogText, formTwo];
const loginInputs = [inputEmailLogin, inputPasswordLogin, inputSubmitLogin];
divLoginForm.appendChild(divFormTwo);
appendChildren(divFormTwo, divFormTwoElements);
divLogText.appendChild(h1LoginForms);
appendChildren(formTwo, loginInputs);
