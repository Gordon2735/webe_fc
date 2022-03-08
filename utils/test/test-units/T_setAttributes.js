import { setAttributes } from '../../../public/src/js/webeLibrary.js';
// import '../../../public/components/webe-devtools/tags-devtools.js';

const body = document.querySelector('body');
const main = document.createElement('main');

setAttributes(main, {
	id: 'main',
	class: 'main',
	alt: 'this is an html main element',
});
body.appendChild(main);

export default main;
