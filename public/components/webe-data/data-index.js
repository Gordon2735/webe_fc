//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    data-index     ::::::::  )//

'use strict';

import appendChildren, {
	head,
	setAttributes,
	renderHeadScripts,
	renderArray
} from './data-utility.js';

const scriptWebeData = document.createElement('script');
setAttributes(scriptWebeData, {
	type: 'module',
	src: '../components/webe-data/webe-data.js',
	content: 'text/javascript'
});
const scriptCollection = [scriptWebeData];
const stickyNotes = [
	console.info(
		'%c The data-index file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
		'background: #222222; color: hsl(313, 98%, 50%);'
	)
];
renderHeadScripts(scriptCollection, head, stickyNotes);

const main = document.createElement('main');
setAttributes(main, {
	id: 'main',
	class: 'container'
});

const header = document.createElement('header');
setAttributes(header, {
	id: 'header',
	class: 'header'
});

const figure = document.createElement('figure');
setAttributes(figure, {
	id: 'figure',
	class: 'figure',
	alt: 'Logo Image',
	href: '/'
});

const figureImg = document.createElement('img');
setAttributes(figureImg, {
	id: 'owlHead',
	class: 'figure-img',
	src: '../components/webe-data/data-resources/data-img/head_icononly_transparent_nobuffer.png',
	alt: 'Logo Image'
});

const figcaption = document.createElement('figcaption');
setAttributes(figcaption, {
	class: 'figcaption-text',
	textContent: 'Hoot Webelistics Logo Image',
	alt: 'Logo Image Text'
});

const divLogo = document.createElement('div');
setAttributes(divLogo, {
	id: 'div-logo',
	class: 'logo',
	alt: 'Name Logo of Document'
});

export const h1 = document.createElement('h1');
setAttributes(h1, {
	class: 'h1-logo',
	alt: 'Name Logo of Document'
});
const logoText = (h1.innerHTML =
	'HooT<sup class="h1-tm">&#8482;</sup>  Webelistics<sup class="h1-r"> &#174;</sup>');

const supTM = document.createElement('sup');
setAttributes(supTM, {
	class: 'h1-tm',
	alt: 'Logo Trademark of Document'
});

const supR = document.createElement('sup');
setAttributes(supR, {
	class: 'h1-r',
	alt: 'Logo Registered of Document'
});

const dataSection = document.createElement('section');
setAttributes(dataSection, {
	id: 'data-section',
	class: 'data-section'
});

const sectionHeaderOne = document.createElement('div');
setAttributes(sectionHeaderOne, {
	id: 'section-header-one',
	class: 'section-header-one'
});

const headerOneH2 = document.createElement('h2');
setAttributes(headerOneH2, {
	id: 'header-one-h2',
	class: 'header-one-h2'
});
const headerOneH2Text = (headerOneH2.innerHTML = 'MongoDB');

const sectionHeaderImage = document.createElement('div');
setAttributes(sectionHeaderImage, {
	id: 'section-header-image',
	class: 'section-header-image'
});

const headerImage = document.createElement('img');
setAttributes(headerImage, {
	id: 'header-image',
	class: 'header-image',
	src: '../components/webe-data/data-resources/data-img/node_js_tall.png',
	alt: 'Node.js Logo'
});

const sectionHeaderTwo = document.createElement('div');
setAttributes(sectionHeaderTwo, {
	id: 'section-header-two',
	class: 'section-header-two'
});

const HeaderTwoH2 = document.createElement('h2');
setAttributes(HeaderTwoH2, {
	id: 'header-two-h2',
	class: 'header-two-h2'
});
const headerTwoH2Text = (HeaderTwoH2.innerHTML = 'Node.js');

const nestedVars = [logoText, headerOneH2Text, headerTwoH2Text];
const headerCollection = [figure, divLogo];
const figureCollection = [figureImg, figcaption];
const divLogoCollection = [h1, supTM, supR];
const sectionHeaderElementCollection = [
	sectionHeaderOne,
	sectionHeaderImage,
	sectionHeaderTwo
];

const mainElementCollection = [header, dataSection];

const RenderingElements = () => {
	appendChildren(figure, figureCollection);
	appendChildren(divLogo, divLogoCollection);
	appendChildren(header, headerCollection);
	sectionHeaderOne.appendChild(headerOneH2);
	sectionHeaderImage.appendChild(headerImage);
	sectionHeaderTwo.appendChild(HeaderTwoH2);
	appendChildren(dataSection, sectionHeaderElementCollection);
	renderArray(nestedVars);
	appendChildren(main, mainElementCollection);
};

export { main as default, RenderingElements };
