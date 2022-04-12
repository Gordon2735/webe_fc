// A few things that are good to know and probably will blow your mind

//     Some DOM Properties don’t have corresponding HTML attributes. innerHTML is a good example.
//     Some HTML attributes don’t have corresponding DOM properties. colspan is a good example.
//     Some attributes have a direct relation with DOM properties. id is a good example.

// In general, you can say that HTML attribute values no longer change after the browser has parsed the page. But JavaScript will not be JavaScript if there is no exception to this rule, because with the help of setAttribute() attribute values can be changed. DOM property values, on the other hand, can always change.

// Another thing that is good to know is that HTML attributes and DOM properties are like apples to oranges, even if they have the same name! Let’s look at the following example to get a better picture:
{
	/* <input type="text" value="Ye olde input"/> */
}
// Here we see a default <input /> element with the HTML attributes type and value. When the browser parses, a DOM Object is created with the same properties that contain the values “text” and “Ye olde input”. If a user types “Hello world” you will notice that the attribute value didn’t change, but the property value did!

const input = document.querySelector('input');
input.getAttribute('value'); // returns "Ye olde input"
input.value; // returns "Hello world"

// This is because HTML attributes only define the initial values of elements and therefore no longer change. Here is another example to emphasize the differences:

// <!-- this element is part of a page with the url: https://test.com -->
// <a href="foo.html"/>

// Let’s take a look at a href attribute and property by accessing it with some plain old JavaScript.

const anchor = document.querySelector('a');
anchor.getAttribute('href'); // returns "foo.html"
anchor.href; // returns "https://test.com/foo.html"

// Here too, the attribute and property have the same names, but the values differ.
// Property reflection

// In the previous examples we saw that properties and attributes of the same name contain different values, thus not synchronized with each other, but some (standard) properties are being synchronized. This is called property to attribute reflection and is quite useful when applying accessibility and ensuring that CSS selectors work properly.

// Lets take a look at the following example


/* 
The following CSS selector applies to disabled text inputs:
*/
input[type="text"]:disabled {
    border-color: red;
    background: tomato;
  }


//   The CSS selector depends on the disabled attribute and if the value cannot be changed (for example with JavaScript) the element can never be activated again.

// Another perk is the time that is saved with property reflection. Take a look at the following example:

{/* <button disabled>Click me</button> */}


// We can edit the attribute values using getAttribute(), setAttribute() and removeAttribute(), but these methods only work with string values (remember: attributes are always strings!) and are cumbersome. Let us take a look at the following example in which we enable a button and then disable it again:

const btn = document.querySelector('button');

btn.removeAttribute('disabled'); // enables the button
btn.getAttribute('disabled'); // returns null

btn.setAttribute('disabled', 'true'); // disables the button again
btn.getAttribute('disabled'); // returns true

// As you can see, this is quite cumbersome. The method names are long and only work with string values as you can see on the line where we set the attribute value. Instead of a boolean (which makes the most sense) we have to provide a string. With property reflection, we can simply assign a boolean value and the syntax is many times more compact. Just take a look at the following example:

// const btn = document.querySelector('button');

btn.disabled = false; // enables the button

btn.disabled = true; // disabled the button again

Property reflection and Custom Elements

// Property reflection is default behavior and needed to keep the DOM’s representation in sync with the JavaScript state and our Custom Elements should follow this practice as well. A good way to do this is by using getters and setters. Take a look at the following example where we want to reflect a property called value.

export class MyCustomElement extends HTMLElement {
    ...
    
    get value() {
      return this.getAttribute('value');
    }
    
    set value(val) {
      if(val) {
        this.setAttribute('value', val);
      } else {
        this.removeAttribute('value');
      }
    }
  }


//   When the property value changes the new value will be reflected to the attribute as well. The same can be done with booleans:

export class MyCustomElement extends HTMLElement {
    ...
    
    get disabled() {
      return this.hasAttribute('disabled');
    }
    
    set disabled(val) {
      if(val) {
        this.setAttribute('disabled', val);
      } else {
        this.removeAttribute('disabled');
      }
    }
  }


// The attributeChangedCallback(name, oldValue, newValue) lifecycle hook can be used to enable property reflection. Take a look at the next example where a property disabled is reflected:

export class MyCustomElement extends HTMLElement {
    ...
    
    get disabled() {
      return this.hasAttribute('disabled');
    }
    
    set disabled(val) {
      if(val) {
        this.setAttribute('disabled', val);
      } else {
        this.removeAttribute('disabled');
      }
    }
  }
  
  static get observedAttributes() {
    return ['disabled'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.disabled = newValue;  
  }

  Final thoughts

// The HTML and DOM standards evolved, rather than built up from the ground and a direct consequence is the (sometimes quirky) differences between DOM properties and HTML attributes. HTML attributes are converted to DOM properties while parsing an HTML document and can only consist of strings and the values cannot be changed after initialization.

// DOM properties are complex data structures that contain Objects, Functions, Arrays or Strings and their values can be changed after initialization. Sometimes attributes and properties have the same names, but this does not mean that they or their values are the same.

// In some cases, properties and attributes are in sync and this is when reflection takes place. This ensures that when the property value changes the attribute value is automatically updated. This is especially useful when enabling/disabling HTML elements, implementing accessibility and styling applications. It is also necessary to keep the HTML page in sync with the JavaScript state.

// Reflecting properties is default behavior and Custom Elements must also follow these standards. With the help of getters andsetters, it’s relatively easy to implement. The Custom Elements Standard also offers a lifecycle hook that can be used to implement property reflection.
