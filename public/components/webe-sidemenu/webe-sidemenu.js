const template = document.createElement('template');
template.innerHTML = `

</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>
<nav class="navigation">
	<div class="toggle">
	<ion-icon name="menu-outline" class="open"></ion-icon>
	<ion-icon name="close-circle-outline" class="close"></ion-icon>	
	</div>
		<ul>
			<li class="list active">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="home-outline"></ion-icon>
					</span>
					<span class="title">Home</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="person-outline"></ion-icon>
					</span>
					<span class="title">Profile</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="chatbubbles-outline"></ion-icon>
					</span>
					<span class="title">Messages</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="settings-outline"></ion-icon>
					</span>
					<span class="title">Settings</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="help-outline"></ion-icon>
					</span>
					<span class="title">Help</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="lock-closed-outline"></ion-icon>
					</span>
					<span class="title">Password</span>
				</a>
			</li>
			<li class="list">
				<b></b>
				<b></b>
				<a href="#">
					<span class="icon">
						<ion-icon name="log-out-outline"></ion-icon>
					</span>
					<span class="title">Sign Out</span>
				</a>
			</li>
		</ul>
	</nav>

`;
class WebeSidemenu extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		const style = document.createElement('style');
		style.textContent = "@import 'webe-sidemenu.css';";
		this.shadowRoot.appendChild(style);

		const webeSidemenu = document.querySelector('webe-sidemenu').shadowRoot;

		let menuToggle = webeSidemenu.querySelector('.toggle');
		let navigation = webeSidemenu.querySelector('.navigation');
		menuToggle.onclick = () => {
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		};

		let list = webeSidemenu.querySelectorAll('.list');
		for (let i = 0; i < list.length; i++) {
			list[i].onclick = () => {
				let j = 0;
				while (j < list.length) {
					list[j++].className = 'list';
				}
				list[i].className = 'list active';
			};
		}
	}
	connectedCallback() {}

	disconnectedCallback() {}
}

window.customElements.define('webe-sidemenu', WebeSidemenu);

//
// todo     //  add active class in selected list item  //
