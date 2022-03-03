import { TemplateTender } from './template-tender.js';
import { sharedStyles } from './shared-styles.js';

export class ApplicationDialog extends TemplateTender {
	open(data) {
		this.applicationData = data;
		this.render();
		this.shadowRoot
			.querySelector('dialog')
			.addEventListener('click', e => e.target.close());
		this.shadowRoot.querySelector('dialog').showModal();
	}

	close() {
		this.shadowRoot.querySelector('dialog').close();
	}

	get template() {
		return `
            <style>
                dialog::backdrop {
                    background-color: rgba(0, 0, 0, 0.8);
                }

                dialog {
                    max-width: 600px;
                    width: auto;
                    text-align: center;
                }  

                section {
                    display: flex;
                    align-items: center;
                    margin: 15px;
                }

                .cell-img, .email-img {                    
                    width: 40px;
                    margin-left: 32px;
                }
                
                div {
                    display: flex;
                    align-items: center;
                    margin: 15px;
                }


                ${sharedStyles.card}
            
            </style>
            <dialog>
                ${
					this.applicationData
						? `<img src=${this.profileData.picture.thumbnail} /> 
                <h1>${this.profileData.name.first}  ${this.profileData.name.last}</h1>

                <hr />
                
                <section>
                    <div>
                        <img class="cell-img" src='/src/img/cell-phone.png' />
                        <p>${this.profileData.cell}</p>
                    </div>                

                    <div>
                        <img class="email-img" src='/src/img/email.png' />
                        <p>${this.profileData.email}</p>
                    </div>                

                </section>
                
                `
						: ``
				}

                <p>
                    liquam dignissim fringilla est, eget viverra lorem ultrices facilisis. 
                    Curabitur consequat quis nisl bibendum pretium. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. 
                </p>
            </dialog> 
    
        
        `;
	}
}
