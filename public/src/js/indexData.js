//hw :::::::: HooT Webelistics® :::::::: hw//
//)  ::::::::    indexData    ::::::::::  )//

'use strict';

import { setAttributes } from './js_lib/js_utility/generalFunc.js';

const head = document.querySelector('head');
const scriptData = document.createElement('script');
setAttributes(scriptData, {
	type: 'module',
	src: '/state/indexDataPrimer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
});
head.appendChild(scriptData);
