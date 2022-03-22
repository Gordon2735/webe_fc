//hw :::::::: HOOT Webelistics® :::::::: hw//
//)  ::::::::    webe-login     :::::::: )//

const setAttributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
};

const body = document.querySelector('body');
setAttributes(body, {
	class: 'body-login',
	alt: 'Body of Document',
});

const header = document.querySelector('header');
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

const nav = document.querySelector('nav');
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
}).innerHTML = `
HooT<sup class="h1-tm"> &#8482;</sup>Webelistics<sup class="h1-r"> &#174;</sup>`;

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
	class: 'menu',
	alt: 'Menu of Document',
});

const ulMenu = document.createElement('ul');
setAttributes(ulMenu, {
	class: 'ul-menu',
	alt: 'Menu Unordered List of Document',
});

const liMenu = document.createElement('li');
setAttributes(liMenu, {
	class: 'li-menu',
	alt: 'Menu List Item of Document',
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

const liLogin = document.createElement('li');
setAttributes(liLogin, {
	class: 'li-login',
	alt: 'Login List Item of Document',
}).innerHTML = `
<li onclick="${signupToggle()}">Signup</li>
<li onclick="${loginToggle()}">Login</li>
`;

const main = document.createElement('main');
setAttributes(main, {
	class: 'main-container',
	alt: 'Main Container',
});

const divSignup = document.createElement('div');
setAttributes(divSignup, {
	class: 'signup-form',
	alt: 'Signup Form',
});

const divForm = document.createElement('div');
setAttributes(divForm, {
	class: 'form',
	alt: 'Signup Form Container',
});

const divClose = document.createElement('div');
setAttributes(divClose, {
	class: 'close',
	alt: 'Close Signup Form',
}).innerHTML = `
<div class="close" onclick="${signupToggle()}">&times;</div>`;

const divText = document.createElement('div');
setAttributes(divText, {
	class: 'text',
	alt: 'Signup Form Text',
}).innerHTML = `<h1>Register Form</h1>`;

const form = document.createElement('form');
setAttributes(form, {
	class: 'form-signup',
	alt: 'Signup Form',
	action: '#',
});

const divRow = document.createElement('div');
setAttributes(divRow, {
	class: 'row',
	alt: 'Signup Form Row',
}).innerHTML = `<input type="text" placeholder="First Name" />
<input type="text" placeholder="Last Name" />`;

form.innerHTML = `
<input type="email" placeholder="Email ID" />
<input type="password" placeholder="Password" />
<input type="password" placeholder="Confirm Password" />
<input type="submit" value="Register" />
`;

const divLoginForm = document.createElement('div');
setAttributes(divLoginForm, {
	class: 'login-form',
	alt: 'Login Form Container',
}).innerHTML = `
<div class="close" onclick="${loginToggle()}">&times;</div>
<div class="text">
	<h1>Login</h1>
</div>
<form action="#">
	<input type="email" placeholder="Email ID" />
	<input type="password" placeholder="Password" />
	<input type="submit" value="Login" />
</form>
`;

function signupToggle() {
	var container = document.querySelector('.container');
	container.classList.toggle('active');
	var popup = document.querySelector('.signup-form');
	popup.classList.toggle('active');
}
function loginToggle() {
	var container = document.querySelector('.container');
	container.classList.toggle('active');
	var popup = document.querySelector('.login-form');
	popup.classList.toggle('active');
}

export class WebeLogin extends HTMLElement {
	constructor() {
		super();
	}
}
