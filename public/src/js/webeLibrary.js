//= ::::  webe-devtools Application Library  :::: =\

'use strict';

export const head = document.querySelector('head');
export const body = document.querySelector('body');

export const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

// export const createTag = ((varName, docuType, tagKind) => {
//    script.append( `const ${varName} = document.${docuType}('${tagKind}');`)
// })
