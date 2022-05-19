//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    data-shell     ::::::::  )//

'use strict';

import { DataTemplateRenderer } from './data-TemplateRenderer.js';
import { dataSharedStyles } from './data-sharedStyles.js';
import appendChildren, { head, setAttributes } from './data-utility.js';

('use strict');

const scriptIndex = document.createElement('script');
setAttributes(scriptIndex, {
	id: 'script-data-index',
	type: 'module',
	src: '../components/webe-data/data-index.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for Web-Data Index',
});
head.appendChild(scriptIndex);

export class DataShell extends DataTemplateRenderer {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || data-shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `
        
            <webe-data class="webe-data"></webe-data>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

				:root {
					--bg-primary-clr: hsl(0, 0%, 13%);
					--bg-greyLight-clr: hsl(0, 4%, 89%);
					--bg-greyDark-clr: hsl(0, 0%, 71%);
					--bg-webeLightBlue-clr: hsl(195, 53%, 79%);
					--bg-webeDarkBlue-clr: hsl(195, 98%, 20%);
					--webe-header-clr: hsl(32, 83%, 54%);
					--webe-HOOT-clr: hsl(32, 83%, 54%);
					--webe-fontBlack-clr: hsl(0, 0%, 0%);
					--webe-fontDark-clr: hsl(0, 0%, 13%);
					--webe-fontDarkAdj-clr: rgba(33, 33, 33, 0.8);
					--webe-fontWhite-clr: hsl(0, 100%, 100%);
					--webe-fontLight-clr: hsl(0, 3%, 85%);
					--webe-font-clr-freak: hsla(90, 100%, 50%, 0.9);
					--webe-HOOT-fs: 'Chango', cursive;
					--webe-title-fs: 'Days One', sans-serif;
					--webe-poppins-fs: 'Poppins', sans-serif;
					--webe-work-fs: 'Work Sans', sans-serif;
					--webe-fontOrange-text-shadow: hsl(32, 83%, 54%) 2px 1px 2px;
					--webe-fontDark-text-shadow: hsl(0, 0%, 13%) 2px 2px 3px;

				}

				${dataSharedStyles.main}
                           
            </Style>        
        `;
	}
}
customElements.define('data-shell', DataShell);
