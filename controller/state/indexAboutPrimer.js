import store from '/state/store/indexState.js';
import startComponentShell from '/state/components/startComponentShell.js';

const loginElement = document.querySelector('webe-login');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkComponentShell = async () => {
			compShellElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('compShellElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkComponentShell();

		const checkLogin = async () => {
			loginElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('loginElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkLogin();
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

const startComponentShellInstance = new startComponentShell();
startComponentShellInstance.render();
