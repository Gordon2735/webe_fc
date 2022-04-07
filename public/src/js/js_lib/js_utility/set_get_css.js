var el = document.querySelector('div');

// getComputedStyle for modern browsers, currentStyle for IE
// var style = window.getComputedStyle
// 	? getComputedStyle(el, null)
// 	: el.currentStyle;

// reading properties
// console.log(style.backgroundColor);

// reading properties containing hyphens
// console.log(style['-webkit-text-size-adjust']);

// var el = document.querySelector('div');

el.style.backgroundColor = 'green';
el.style.display = 'none';
el.style['border-radius'] = '5px';

el.style.cssText += 'background: green; display: none;';

// helper function to set multiple CSS properties
function css(el, styles) {
	for (var property in styles) el.style[property] = styles[property];
}
// example
// var el = document.querySelector('div');
css(el, { background: 'green', display: 'none', 'border-radius': '5px' });

//
// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Using Object.assign:

Object.assign(yourelement.style, {
	fontsize: '12px',
	left: '200px',
	top: '100px',
});

// This also gives you ability to merge styles, instead of rewriting the CSS style.

// You can also make a shortcut function:

// const setStylesOnElement = function (styles, element) {
// 	Object.assign(element.style, styles);
// };

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// If you have the CSS values as string and there is no other CSS already set for the element (or you don't care about overwriting), make use of the cssText property:

document.getElementById('myElement').style.cssText =
	'display: block; position: absolute';

// You can also use template literals for an easier, more readable multiline CSS-like syntax:

document.getElementById('myElement').style.cssText = `
  display: block; 
  position: absolute;
`;

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Make a function to take care of it, and pass it parameters with the styles you want changed..

function setStyle(objId, propertyObject) {
	var elem = document.getElementById(objId);
	for (var property in propertyObject)
		elem.style[property] = propertyObject[property];
}

// and call it like this

setStyle('myElement', { fontsize: '12px', left: '200px' });

// for the values of the properties inside the propertyObject you can use variables..

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// set multiple css style properties in Javascript

document.getElementById('yourElement').style.cssText = cssString;

// or

document.getElementById('yourElement').setAttribute('style', cssString);

// Example:

document.getElementById('demo').style.cssText =
	'margin-left:100px;background-color:red';

document
	.getElementById('demo')
	.setAttribute('style', 'margin-left:100px; background-color:red');

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Simplest way for me was just using a string/template litteral:

elementName.style.cssText = `
                                width:80%;
                                margin: 2vh auto;
                                background-color: rgba(5,5,5,0.9);
                                box-shadow: 15px 15px 200px black; `;

// Great option cause you can use multiple line strings making life easy.

// Check out string/template litterals here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// You can have individual classes in your css files and then assign the classname to your element

// or you can loop through properties of styles as -

// var css = { 'font-size': '12px', left: '200px', top: '100px' };

for (var prop in css) {
	document.getElementById('myId').style[prop] = css[prop];
}

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Using plain Javascript, you can't set all the styles at once; you need to use single lines for each of them.

// However, you don't have to repeat the document.getElementById(...).style. code over and over; create an object variable to reference it, and you'll make your code much more readable:

// var obj = document.getElementById('myElement').style;
// obj.top = top;
// obj.left = left;

// ...etc. Much easier to read than your example (and frankly, just as easy to read as the jQuery alternative).

// (if Javascript had been designed properly, you could also have used the with keyword, but that's best left alone, as it can cause some nasty namespace issues)

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Use CSSStyleDeclaration.setProperty() method inside the Object.entries of styles object.
// We can also set the priority ("important") for CSS property with this.
// We will use "hypen-case" CSS property names.

// const styles = {
// 	'font-size': '18px',
// 	'font-weight': 'bold',
// 	'background-color': 'lightgrey',
// 	color: 'red',
// 	padding: '10px !important',
// 	margin: '20px',
// 	width: '100px !important',
// 	border: '1px solid blue',
// };

// const elem = document.getElementById('my_div');

// Object.entries(styles).forEach(([prop, val]) => {
// 	const [value, pri = ''] = val.split('!');
// 	elem.style.setProperty(prop, value, pri);
// });

{
	/* <div id='my_div'> Hello </div>; */
}

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Your best bet may be to create a function that sets styles on your own:

// var setStyle = function (p_elem, p_styles) {
// 	var s;
// 	for (s in p_styles) {
// 		p_elem.style[s] = p_styles[s];
// 	}
// };

// setStyle(myDiv, { color: '#F00', backgroundColor: '#000' });
// setStyle(myDiv, { color: mycolorvar, backgroundColor: mybgvar });

// Note that you will still have to use the javascript-compatible property names (hence backgroundColor)

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// Don't think it is possible as such.

// But you could create an object out of the style definitions and just loop through them.

// var allMyStyle = {
// 	fontsize: '12px',
// 	left: '200px',
// 	top: '100px',
// };

// for (i in allMyStyle)
// 	document.getElementById('myElement').style[i] = allMyStyle[i];

// To develop further, make a function for it:

// function setStyles(element, styles) {
// 	for (i in styles) element.style[i] = styles[i];
// }

// setStyles(document.getElementById('myElement'), allMyStyle);

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::

// This is an old question but I thought it might be worthwhile to use a function for anyone not wanting to overwrite previously declared styles. The function below still uses Object.assign to properly fix in the styles. Here is what I did

// function cssFormat(cssText){

//    let cssObj = cssText.split(";");
//    let css = {};

//    cssObj.forEach( style => {

//        prop = style.split(":");

//        if(prop.length == 2){
//            css[prop[0]].trim() = prop[1].trim();
//        }

//    })

//   return css;
// }

// Now you can do something like

// let mycssText = "background-color:red; color:white;";
// let element = document.querySelector("body");

// Object.assign(element.style, cssFormat(mycssText));

// You can make this easier by supplying both the element selector and text into the function and then you won't have to use Object.assign every time. For example

// function cssFormat(selector, cssText){

//    let cssObj = cssText.split(";");
//    let css = {};

//    cssObj.forEach( style => {

//        prop = style.split(":");

//        if(prop.length == 2){
//            css[prop[0]].trim() = prop[1].trim();
//        }

//    })

//    element = document.querySelector(selector);

//    Object.assign(element.style, css); // css, from previous code

// }

// Now you can do:

cssFormat('body', 'background-color: red; color:white;');

// or same as above (another sample)
cssFormat('body', 'backgroundColor: red; color:white;');

// Note: Make sure your document or target element (for example, body) is already loaded before selecting it.

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::
// We can use JavaScript to get the value of a CSS custom property. Robin wrote up a detailed explanation about this in Get a CSS Custom Property Value with JavaScript. To review, let’s say we’ve declared a single custom property on the HTML element:
// In JavaScript, we can access the value with getComputedStyle and getPropertyValue:

// html {
//     --color-accent: #00eb9b;
//   }
// const colorAccent = getComputedStyle(document.documentElement).getPropertyValue(
// 	'--color-accent'
// ); // #00eb9b

// & :::::::::::::::::::::::::::::::::::::::::::::::::::::
