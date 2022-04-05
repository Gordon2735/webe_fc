import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';

export class LoginDialog extends RenderTemplate {
	constructor() {
		super();
	}
	close() {}
	get template() {
		return `
            <style>
                ${sharedStyles}
            </style>`;
	}
}
window.customElements.define('login-dialog', LoginDialog);

// <style>

// :root {
// 	--webe-bg-clr: hsl(0, 0%, 13%);
// 	--webe-bg-clr-2: hsl(0, 0%, 71%);
// 	--text-primary: hsl(32, 83%, 54%);
// 	--text-secondary: #ececec;
// 	--webe-shadow-clr: hsl(31, 86%, 94%);
// 	--webe-header-trim_1: hsl(30, 4%, 11%);
// 	--webe-header-trim_2: hsl(32, 83%, 54%);
// 	--webe-clr_after: hsl(90, 100%, 50%);
// 	--webe-HOOT-ff: 'Chango', cursive;
// 	--webe-title-ff: 'Days One', sans-serif;
// 	--webe-menu-ff: 'Work Sans', sans-serif;
// 	--webe-clr-bright-pink: hsl(313, 97%, 66%);
// 	--webe-clr-bluify: hsl(231, 100%, 75%);
// 	color:  hsl(0, 0%, 100%);
// 	color:  hsl(77, 97%, 15%);
// 	color:  hsl(76, 98%, 50%);
// 	color:  hsl(195, 74%, 96%);
// 	color:  hsl(0, 0%, 100%);
// }

// * {
// 	margin: 0;
// 	padding: 0;
// 	box-sizing: border-box;
// }

// </style>
