'use strict';

import store from '/state/store/indexState.js';
import StartScripts from '/state/components/startScripts.js';
import StartComponents from '/state/components/startComponents.js';

const headerElement = document.querySelector('webe-header');
const navElement = document.querySelector('webe-nav');
const responsiveElement = document.querySelector('webe-responsive');
const devtoolsElement = document.querySelector('webe-devtools');
const footerElement = document.querySelector('webe-footer');
const compShellElement = document.querySelector('component-shell');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkHeader = async () => {
			headerElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('headerElement', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						`%c Header Element is loaded`,
						'background: #222222; color: #EE82EE'
					);
				}
			);
		};
		checkHeader();

		const checkNav = async () => {
			navElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('navElement', event);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkNav();

		const checkResponsive = async () => {
			responsiveElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('responsiveElement', event);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkResponsive();

		const checkDevtools = async () => {
			devtoolsElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('devtoolsElement', event);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkDevtools();

		const checkFooter = async () => {
			footerElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('footerElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkFooter();
	}
};
currentDOM();

export const checkBody = async () => {
	if (store.state.checkBody === true) {
		const domBody = async () => {
			document.body.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.state.checkBody('DOMContentLoaded', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 0),
				() => {
					store.state('DOMContentLoaded', true);
				}
			);
		};
		domBody();
	} else {
		await new Promise(
			resolve => setTimeout(resolve, 0),
			() => {
				if (store.state.checkBody === false)
					store.state('DOMContentLoaded', true);
			}
		);
	}
};
checkBody();

const startScriptsInstance = new StartScripts();
const startComponentsInstance = new StartComponents();

startScriptsInstance.render();
startComponentsInstance.render();
