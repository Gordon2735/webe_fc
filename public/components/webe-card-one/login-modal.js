import { RenderTemplate } from './render-template.js';
import { sharedStyles } from './login-shared-styles.js';
import './login-index.js';

const scriptModal = document.createElement('script');
setAttributes(scriptModal, {
	type: 'module',
	src: '../components/webe-login/login-modal.js',
	crossorigin: 'anonymous',
});

export class LoginModal extends RenderTemplate {
	constructor() {
		super();

		this.noShadow = false;
		const root = this.shadowRoot;

		function tabify(element) {
			const header = element.querySelector('.gator-tabs-header');
			const content = element.querySelector('.gator-tabs');
			const tab_headers = [...header.children];
			const tab_contents = [...content.children];
			tab_contents.forEach(x => (x.style.display = 'none'));
			let current_tab_index = -1;

			function setTab(index) {
				if (current_tab_index > -1) {
					tab_headers[current_tab_index].style.fontWeight = 400;
					tab_contents[current_tab_index].style.display = 'none';
				}
				tab_headers[index].style.fontWeight = 800;
				tab_contents[index].style.display = 'flex';
				current_tab_index = index;
			}

			default_tab_index = tab_headers.findIndex(x => {
				return [...x.classList].indexOf('default-gator-tab') > -1;
			});

			default_tab_index =
				default_tab_index === -1 ? 0 : default_tab_index;
			setTab(default_tab_index);
			tab_headers.forEach((x, i) => (x.onclick = event => setTab(i)));
		}

		// this is where the magic happens!
		[...document.querySelectorAll('.gator-tabs-container')].forEach(x =>
			tabify(x)
		);
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || webe-login.js is connected',
			'background: #222222; color: hsl(64, 97%, 45%);'
		);
		console.info('connectedCallback');
	}
	// static get observedAttributes() {
	// 	return ['modal-open'];
	// }
	// attributeChangedCallback(name, oldValue, newValue) {
	// 	// console.info('attributeChangedCallback');
	// }
	// static get observedProperties() {}
	get template() {
		return `

			<!doctype html>
			<html lang="en"> xzzzzz                                                                                                           
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Gator tabs</title>
				</head>
				<body>
					<div class="gator-tabs-container">
						<ul class="gator-tabs-header">
							<li>The nest</li>
							<li class="default-gator-tab">Hello world!</li>
							<li>Rise of the gator</li>
						</ul>
						<ul class="gator-tabs">
							<li class="gator-tabs-container">
								<ul class="gator-tabs-header">
									<li>Nested 1</li>
									<li class="default-gator-tab">Nested 2</li>
								</ul>
								<ul class="gator-tabs">
									<li class="gator-tab">Some eggs in nest one</li>
									<li class="gator-tab">Some eggs in nest two</li>
								</ul>
							</li>
						<li class="gator-tab">Hello world from tab one!</li>
						<li class="gator-tab">Believe me I know tabs, I have the best tabs. Nobody does tabs like I do.</li>
						<li class="gator-tab">For now the eggs lay dormant but soon the gators will rise from the swamps.</li>
						</ul>
					</div>
				</body>
			</html>
		
            <style>
                ${sharedStyles.modal}
            </style>
            
        `;
	}
	// disconnectedCallback() {
	// 	console.info('disconnectedCallback');
	// }
}
customElements.define('login-modal', LoginModal);

sharedStyles.modal = `
    /* minimal reset */
    * {
    margin:0;
    border:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    }

    body{
    background-color: #333;
    /* because serifs are gross (IMO) */
    font-family: sans-serif;
    }

    .gator-tabs-container{
    display:flex;
    flex-direction:column;
    width:100%;
    }

    .gator-tabs-header {
    background-color:#DFA612;
    display:flex;
    flex-wrap:wrap;
    padding:.375rem;
    }

    .gator-tabs-header > li {
    color:#fff;
    cursor:pointer;
    flex-grow:1;
    padding:.375rem;
    font-size:1.125rem;
    }

    .gator-tabs {
    display:flex;
    }

    .gator-tab {
    padding:1rem;
    color:#fff;
    }
`;
