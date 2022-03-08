import Responsive from './webe-responsive.js';
import { setAttributes } from '../../src/js/webeLibrary.js';

const fireComponent = () => {
	setTimeout(() => {
		const component = document.createElement('webe-responsive');
		setAttributes(component, {
			id: 'webe-responsive',
			class: 'webe-responsive',
			alt: 'Responsive Web Component',
		});
		document.body.appendChild(component);
	}, 3000);
	const script = document.createElement('script');
	setAttributes(script, {
		src: './webe-responsive.js',
		type: 'module',
		content: 'text/javascript',
	});
	document.head.appendChild(script);
	return Responsive;
};

document.addEventListener('DOMContentLoaded', fireComponent);
