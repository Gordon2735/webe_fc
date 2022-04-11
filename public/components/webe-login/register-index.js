//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::   register-index  ::::::::: )//

'use strict';

import appendChildren, {
	renderHeadScripts,
	loopList,
	renderArray,
	setAttributes,
} from './login-index.js';

const scriptRegister = document.createElement('script');
setAttributes(scriptRegister, {
	src: '../components/webe-login/login-register.js',
	type: 'module',
});

const scriptRegisterIndex = document.createElement('script');
setAttributes(scriptRegisterIndex, {
	src: '../components/webe-login/register-index.js',
	type: 'module',
});

export const mainRegister = document.createElement('main');
setAttributes(mainRegister, {
	id: 'mainRegister-container',
	class: 'main-register',
	alt: 'main document container',
	role: 'main Container',
	'aria-label': 'main document container',
});

const headerRegister = document.createElement('header');
setAttributes(headerRegister, {
	id: 'header',
	class: 'header-register',
	alt: 'header',
	role: 'header',
	'aria-label': 'header',
});

const h1Header = document.createElement('h1');
setAttributes(h1Header, {
	id: 'h1-header',
	class: 'h1-header',
	alt: 'h1 header',
	role: 'h1 header',
	'aria-label': 'h1 header',
});
const h1HeaderText = (h1Header.innerHTML = `Create an Account and Register`);

const articleRegister = document.createElement('article');
setAttributes(articleRegister, {
	id: 'article-register',
	class: 'article-register',
	alt: 'article register',
	role: 'article register',
	'aria-label': 'article register',
});

export const ulRegister = document.createElement('ul');
setAttributes(ulRegister, {
	id: 'ul-register',
	class: 'ul-register',
	alt: 'ul register',
	role: 'ul register',
	'aria-label': 'ul register',
});

const footer = document.createElement('footer');
setAttributes(footer, {
	id: 'footer',
	class: 'footer',
	alt: 'footer',
	role: 'footer',
	'aria-label': 'footer',
});

const navFooter = document.createElement('nav');
setAttributes(navFooter, {
	id: 'nav',
	class: 'nav-footer',
	alt: 'nav',
	role: 'nav',
	'aria-label': 'nav',
});

const ulNavFooter = document.createElement('ul');
setAttributes(ulNavFooter, {
	id: 'ul-nav',
	class: 'ul-nav-footer',
	alt: 'ul nav',
	role: 'ul nav',
	'aria-label': 'ul nav',
});

const anchorHome = document.createElement('a');
setAttributes(anchorHome, {
	id: 'anchor-home',
	class: 'anchor-home',
	href: '/',
	alt: 'anchor home',
	role: 'anchor home',
	'aria-label': 'anchor home',
});
const anchorHomeText = (anchorHome.innerHTML = `Home`);

const anchorInternet = document.createElement('a');
setAttributes(anchorInternet, {
	id: 'anchor-internet',
	class: 'anchor-internet',
	href: '/internet',
	alt: 'anchor internet',
	role: 'anchor internet',
	'aria-label': 'anchor internet',
});
const anchorInternetText =
	(anchorInternet.innerHTML = `Internet Application Development`);

const anchorDesktop = document.createElement('a');
setAttributes(anchorDesktop, {
	id: 'anchor-desktop',
	class: 'anchor-desktop',
	href: '/desktop',
	alt: 'anchor desktop',
	role: 'anchor desktop',
	'aria-label': 'anchor desktop',
});
const anchorDesktopText =
	(anchorDesktop.innerHTML = `Desktop Application Development`);

const anchorHandheld = document.createElement('a');
setAttributes(anchorHandheld, {
	id: 'anchor-handheld',
	class: 'anchor-handheld',
	href: '/mobile',
	alt: 'anchor handheld',
	role: 'anchor handheld',
	'aria-label': 'anchor handheld',
});
const anchorHandheldText =
	(anchorHandheld.innerHTML = `Handheld Devices Application Development`);

const anchorAccounts = document.createElement('a');
setAttributes(anchorAccounts, {
	id: 'anchor-accounts',
	class: 'anchor-accounts',
	href: '/accounts',
	alt: 'anchor accounts',
	role: 'anchor accounts',
	'aria-label': 'anchor accounts',
});
const anchorAccountsText = (anchorAccounts.innerHTML = `Accounts`);

const anchorHelp = document.createElement('a');
setAttributes(anchorHelp, {
	id: 'anchor-help',
	class: 'anchor-help',
	href: '/help',
	alt: 'anchor help',
	role: 'anchor help',
	'aria-label': 'anchor help',
});
const anchorHelpText = (anchorHelp.innerHTML = `Help`);

const asideSidebar = document.createElement('aside');
setAttributes(asideSidebar, {
	id: 'aside-sidebar',
	class: 'aside-sidebar',
	alt: 'aside sidebar',
	role: 'aside sidebar',
	'aria-label': 'aside sidebar',
});

const navSidebar = document.createElement('nav');
setAttributes(navSidebar, {
	id: 'nav-sidebar',
	class: 'nav-sidebar',
	alt: 'nav sidebar',
	role: 'nav sidebar',
	'aria-label': 'nav sidebar',
});

const ulNavSidebar = document.createElement('ul');
setAttributes(ulNavSidebar, {
	id: 'ul-nav-sidebar',
	class: 'ul-nav-sidebar',
	alt: 'ul nav sidebar',
	role: 'ul nav sidebar',
	'aria-label': 'ul nav sidebar',
});

const scriptRenderer = [scriptRegister, scriptRegisterIndex];
const stickyNotes = [
	console.info(
		'%c The register-index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color: hsl(59, 100%, 50%);'
	),
];

const mainElements = [headerRegister, articleRegister, asideSidebar, footer];
const liClassNavFooter = 'li-nav-footer';
const liClassNavSidebar = 'li-nav-sidebar';
const liNavFooter = [anchorHome, anchorAccounts, anchorHelp];
const liNavSidebar = [anchorInternet, anchorDesktop, anchorHandheld];

const innerVars = [
	h1HeaderText,
	anchorHomeText,
	anchorInternetText,
	anchorDesktopText,
	anchorHandheldText,
	anchorAccountsText,
	anchorHelpText,
];

renderHeadScripts(scriptRenderer, stickyNotes);

navSidebar.appendChild(ulNavSidebar);
footer.appendChild(navFooter);
navFooter.appendChild(ulNavFooter);

appendChildren(mainRegister, mainElements);
headerRegister.appendChild(h1Header);

articleRegister.appendChild(ulRegister);
asideSidebar.appendChild(navSidebar);

renderArray(innerVars);

loopList(liNavSidebar, liClassNavSidebar, ulNavSidebar);
loopList(liNavFooter, liClassNavFooter, ulNavFooter);
