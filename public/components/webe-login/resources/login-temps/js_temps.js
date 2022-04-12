// 
        
// this.shadowRoot.appendChild(template.content.cloneNode(true));

// appendChildren(shadow, divFormsRend);

		// this.attachShadow({ mode: 'open' });
		// liSignup.onclick = () => signupToggle;
		// liLogin.onclick = () => loginToggle;

		// liSignup.setAttribute('class', ' active');
		// liLogin.setAttribute('class', ' active');
		// liSignup.setAttribute('onclick', 'signupToggle');
		// liLogin.setAttribute('onclick', 'loginToggle');


// const initRender = () => {
// 	setAttributes(script, {
// 		type: 'module',
// 		content: 'text/javascript',
// 		crossorigin: 'anonymous',
// 		alt: 'Script for Popup',
// 	});
// 	const elementSwitch = (script.innerHTML = `${signupToggle} ${loginToggle}`);
// 	const initialRenderGroup = [script, elementSwitch];
// 	appender(body, initialRenderGroup);
// };
// initRender();

// const jsLogicFunctions = async () => {
// 	if (!this.noShadowRoot === true) {
// 		this.template = this.attachShadow({ mode: 'open' });
// 		this.render();
// 	} else {
// 		this.innerHTML = `${recycle}`;
// 		throw new Error('noShadowRoot is true', () => {
// 			console.error(
// 				'%c noShadowRoot is true',
// 				'font-size: large; color: red; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;',
// 				Error
// 			);
// 		});
// 	}
// 	const recycle = setInterval(() => jsLogicFunctions(), 1000);
// 	setTimeout(() => {
// 		clearInterval(recycle);
// 		alert(
// 			`Recycled the logic function that render's the
// 			"TOGGLE-logic-functions"-Script in the shadowRoot,
// 			but there is still no shadowRoot available;
// 			even after ten seconds of recycling the function; ?`
// 		);
// 	}, 10000);
// };


// const liSignup = this.querySelector('#li-login-one');
// 		const liLogin = this.querySelector('.li-login');
// 		prettier-ignore
// 		let liOne = window.getComputedStyle(liSignup).active;
// 		let lliTwo = window.getComputedStyle(liLogin).onclick;
// 		console.log(liOne);
// 		console.log(lliTwo);

// console.time("While loop");
// while (i < 1000000) {
// 	i++;
// }
// console.timeEnd('While loop');

// console.time('For loop');
//for (i = 0; i < 1000000; i++) {} // For Loop}console.timeEnd("For loop");

// attributeChangedCallback(name, oldValue, newValue) {}
	// static get observedProperties() {}

	// set template(template) {
	// 	this.render();
	// }

	// .anchor {
	// 	color: hsl(0, 0%, 0%);
	// }
	// .anchor.styled-default:not([href]) {
	// 	cursor: default;
	// 	text-decoration: none;

	// }
	// .anchor.styled-pointer:not([href]) {
	// 	cursor: pointer;
	// }


	//& NODE EVENT LISTENER 
	// liSignup = shadowBody.getElementById('li-login-one');
	// attributeChangedCallback(liSignup, hidden, visible) {
	// 	switch (liSignup) {
	// 		case 'active':
	// 			signupListener.emit('visibility', visible);
	// 			break;
	// 		case '':
	// 			signupListener.emit('visibility', hidden);
	// 			break;
	// 		default:
	// 			throw new Error('Error: liSignup is not defined');
	// 	}
	// }
	// liLogin = shadowBody.getElementById('li-login-two');
	// attributeChangedCallback(liLogin, hidden, visible) {
	// 	switch (liLogin) {
	// 		case 'active':
	// 			loginListener.emit('visibility', visible);
	// 			break;
	// 		case '':
	// 			loginListener.emit('visibility', hidden);
	// 			break;
	// 		default:
	// 			throw new Error('Error: liSignup is not defined');
	// 	}
	// }

// 	const signupListener = new appListener();
// const loginListener = new appListener();

// signupListener.on('style', active => {
// 	const container = shadowBody.querySelector('.container');
// 	const popup = shadowBody.querySelector('.signup-form');
// 	if (active) {
// 		container.classList.toggle('active');
// 		popup.classList.toggle('active');
// 	} else {
// 		throw new Error('Error: active is not defined');
// 	}
// });

// loginListener.on('style', active => {
// 	const container = shadowBody.querySelector('.container');
// 	const popup = shadowBody.querySelector('.login-form');
// 	if (active) {
// 		container.classList.toggle('active');
// 		popup.classList.toggle('active');
// 	} else {
// 		throw new Error('Error: active is not defined');
// 	}
// });
// signupListener.emit('style', liSignup.style.active);
// loginListener.emit('style', liLogin.style.active);


// nodeListener.once('newListener', (event, listener) => {
// 	if (event === 'active') {
// 		listener();
// 	}
// });

// import nodeListener, {
// 	appListener,
// } from '../../src/js/js_lib/node_events/nodeListener.js';

//% SERVER
// class AppListener extends EventEmitter {}
// const appListener = new AppListener();
// export default { appListener };
// app.use(EventEmitter(path.join(__dirname, 'server.js')));

// app.use(express.static('/'));
