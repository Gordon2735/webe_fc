import store from '/state/store/indexState.js';
import startBlogShell from '/state/components/startBlogShell.js';
import { setAttributes } from '../components/webe-blog/blog-utility.js';

const blogShellElement = document.querySelector('blog-shell');
const blogElement = document.querySelector('webe-blog');
const todosElement = document.querySelector('blog-todos');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkBlogShell = async () => {
			blogShellElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('blogShellElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
		};
		checkBlogShell();

		const checkBlog = async () => {
			blogElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('blogElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
			await setAttributes(blogElement, {
				id: 'webe-blog',
				class: 'webe-blog',
				alt: 'Blog',
			});
		};
		checkBlog();

		const checkTodos = async () => {
			todosElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('todosElement', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(resolve => setTimeout(resolve, 0));
			await setAttributes(todosElement, {
				id: 'blog-todos',
				class: 'blog-todos',
				alt: 'Todos',
			});
		};
		checkTodos();
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

const startBlogShellInstance = new startBlogShell();
startBlogShellInstance.render();
