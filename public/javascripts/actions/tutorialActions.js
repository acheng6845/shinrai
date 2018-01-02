import React from 'react';

export function fetchTutorialPage(index) {
	const dataArray = [
		{chapter: "Execution Context", sections: [
			{heading: "Lexical Scope", body: "When the source code is run through a compiler, the scope gets defined in the lexing phase, according to where names and variables were authored in the source code - hence the name, lexical scope."},
			{heading: "Closures", body: (
				<div>
					A function that can remember and access its lexical scope even when that function is executing outside said lexical scope is considered to be a closure.
					<br/>For example:<br/>Function b = (arg1) => {"{"}<br/>&nbsp;&nbsp;var a;<br/>&nbsp;&nbsp;return function(arg2) console.log(a);<br/> {"}"}<br/>var c = b();<br/>c(); //returns a, despite variable a being outside of the lexical scope of function b.
				</div>
			)}	
		]},
		{chapter: "Hoisting", sections: [
			{heading: "Variable Declarations", body: "The JavaScript compiler has been constructed such that variables in the script are hoisted, without content or expressions, above the rest of the script. In other words, it's similar to writing a dictionary with the words first before the definitions. However, variables declared with let are not hoisted."},
			{heading: "Function Declaration", body: "On the other hand, function declarations - function example() {} - are also hoisted to the top of the script, but their contents/definitions go along with them. \nFurthermore, function declarations are hoisted ahead of variable declarations and can be overridden, i.e., duplicates after the first are ignored."},
			{heading: "Function Expression", body: "But, function declarations - var func = () => {} - are called in-line."},
			{heading: "When to Use Either?", body: "Generally, function expressions allow for less surprises and more flexibility, yet they come at the price of being anonymous functions for debuggers. \nA workaround for this on newer browsers would be to use: var foo = function bar() {return 'foobar'};"},
			{heading: "Function Scoping", body: "The lexical scope of a function is the content within its brackets, i.e., function foo() {scope}."},
			{heading: "Block Scoping", body: "Not to be confused, the scope within if, while, and for statements are considered block scopes. These statements share their scope with the global scope unless the variables were instantiated with const or let."}
		]},
		{chapter: "Binding", sections: [
			{heading: "Call", body: "Ex.: Arrays.prototype.slice.call(object, ...parameter)."},
			{heading: "Apply", body: "Ex.: Arrays.prototype.slice.apply(object, [parameters])."},
			{heading:"Bind", body: "Ex.: var x = multipleArgFunction.bind(null, x, y, z)."},
			{heading: "Lexical This", body: "Lexical this essentially refers to the scope of the object."}
		]},
		{chapter: "Objects", sections: [
			{heading: "Prototypes", body: "Object prototypes are essentially defined to be from where JavaScript Objects inherit their properties and methods.\nTo add properties to an object, it's simply object.property = x; however, for prototypes, the property must be added to the constructor function or through Object.prototype.property = x."},
			{heading: "Constructors", body: "Ex.: function Foo(a,b,c) {\nthis.aProperty = a;\nthis.bProperty = b;\nthis.cProperty = c;\n}\nThis would be the basic constructor for a Foo object prototype. Take note that the name starts with a capital letter."},
			{heading: "Mixins", body: "Then, there is the middleground between delegations (call, apply) and inheritance called mixins. These allow for entire functional units to be borrowed and accessed with minimal syntax. Generally, these are classes that define a set of functions relating to a type, usually considered abstract, for their functions to then be borrowed by more concrete classes."},
			{heading: "Mixins - Archaic Logic", body: "An old methodology for constructing mixins utilizes extend functions to copy mixin functions into receiving objects. \nFunction extend(destination, source) {\n for(var element in source) {\n if(source.hasOwnProperty(element)) {\n destination[element] = source[element];\n}}}\nextend(Obj.prototype, mixinObj);"},
			{heading: "Mixins - Functional Logic", body: "var asCircle = function() { this.area = () => {return Math.PI * this.radius * this.radius}; return this; var circle = function(radius) { this.radius = radius; }; asCircle.call(Circle.prototype); var circle1 = new Circle(5); circle1.area();" },
			{heading: "Mixins - Functional with Options", body: "var asOval = (options) => { this.grow = () => { this.shortRadius += options.growBy; }; this.shrinks = () => { this.shortRadius -= options.shrinkBy;}; return this; }; var Oval = (shortRadius) => {this.shortRadius = shortRadius;}; asOval.call(Oval.prototype, {growBy: 2, shrinkBy: 2}); "},
			{heading: "Mixins - Functional with Caching and Closure", body: "var asRectangle = (function(){ function area() {return this.length * this.width;} return function() {this.area = area; return this;} })(); var Rectangle = (length, width) => {this.length = length; this.width = width;}; asRectangle.call(Rectangle.prototype);"},
			{heading: "Mixins - Functional and Options with Currying", body: "function.prototype.curry = () => { var fn = this; var args = [].slice.call(arguments, 0); return () => { return fn.apply(this, args.concat([].slice.call(arguments, 0))); }} var asRectangle = (function() { function grow(growBy) { this.length += growBy, this.width += growBy; } return (options) => { this.grow = grow.curry(options['growBy']); return this; }})(); asRectangle.call(Rectangle.prototype, {growBy: 2}); "}
		]},
		{chapter: "Function Composition", sections: [
			{heading: "Introduction", body: "In math, function compositions are defined as f o g or f(g(x)). Similarly, function compositions in JavaScript can be expressed through cascading functions, but in reverse. For example, foo(bar(x)) would be written as bar(x).foo(y -> y)."},
			{heading: "Currying", body: "A cleaner implementation of function compositions would be through a technique called currying. This is where functions with multiple arguments, through the use of closures, can be inputted each argument separately, or reduced, before finally executing. For example: add = (a, b) => return a + b; curriedAdd = (a) => { return (b) => add(a, b); }."},
			{heading: "Uncurrying", body: "In order to uncurry or to retrieve the multiple argument function, simply input all of the arguments into the curry function. Ex.: curriedAdd = (a) => (b) => return a + b; add = (a,b) => curriedAdd(a)(b);"},
			{heading: "How is Curry Used?", body: "JavaScript's Function prototype's bind method implements currying, i.e., multiply = multiply.bind(null, 3); multiply(2) // returns 6. Furthermore, the React-Redux connect method utilizes currying to map the states to the props in a component. Lastly, event handlers are another application of currying." },
			{heading: "Pipe", body: "Another implementation of function compositions can be through pipes, which would be similar in application to function chaining."},
			{heading: "Higher Order Functions", body: "Higher Order Functions are functions that can take another function as an argument or return a function. As such, currying can be used to generate higher order functions."}
		]},
		{chapter: "Event Handling", sections: [
			{heading: "Event Delegation", body: "Since events bubble upward from children nodes to parents, it's possible to use parent components to delegate event responses according to the triggered node's properties."},
			{heading: "Event Delegation Example", body: "document.getElementById('list').addEventListener('click', (e) => { if(e.target && e.target.nodeName == 'li') alert('list item', e.target.id.replace('post', ''), 'was clicked!')});"},
			{heading: "Event Bubbling", body: "Event bubbling can also be stopped by including this method in the event handler: (e) => {event.stopPropagation()}; "}
		]},
		{chapter: "Type Coercion", sections: [
			{heading: "Data Types", body: "The different data types in JavaScript are: string, number, boolean, object, function, null, and undefined."},
			{heading: "Objects", body: "Then, the objects in JavaScript are Object, Date, and Array."},
			{heading: "typeof", body: "The typeof method would return the data type of a variable; however, the exceptions are that NaN returns number, array.date.null returns an object, and undefined returns undefined."},
			{heading: "instanceof", body: "This method returns a boolean value denoting whether a variable is an instance of the designated Object. Comparisons are done by comparing Object.getPrototypeOf(o) to Object.prototype."},
			{heading: "toString", body: "Another method for determining type coercion is through Object.prototype.toString.call(o) which returns a string, [object ObjectName]. The reason that toString cannot be called directly onto an object o is that Strings, Numbers, Arrays, and Date override the Object's toString method."}	
		]},
		{chapter: "Handling Asynchronous Calls", sections: [
			{heading: "Callbacks", body: "var a = (args, callbackFunction) => {} "},
			{heading: "Promises", body: "new Promise((resolveFunction, rejectFunction)) => {}); Promise.then(onFulfilled?: Function, onRejected?: Function) => Promise"},
			{heading: "Promise Chaining", body: "fetch(url).then(process).then(save).catch(handleErrors);"},
			{heading: "Async/Await", body: "An alternative to the prevalent promises and callbacks in writing asynchronous code are async/await which is a layer built on top of promises. While async/await are non-blocking like promises, they help to transform asynchronous code into cleaner synchronous-like code. Example code: const exampleAction = async () => { console.log(await getJSON()); return true; }"},
			{heading: "Async/Await Explanation", body: "A function denoted by the async keyword inherently becomes a promise where the resolve value is the function's return value. Meanwhile, await can only be called within an async function where the promise (getJSON in this case) will be waited to resolve before being printed to the console."}
		]},
		{chapter: "Selecting or Finding Nodes", sections: [
			{heading: "CSS Selectors", body: "document.querySelector(CSS selectors) or document.querySelectorAll(CSS Selectors)"},
			{heading: "CSS Selectors List", body: (<div>.example = elements with class='example'<br/>#name = elements with id='name'<br />* = all elements<br/>p = paragraph elements<br/>p, div = paragraph and div elements<br/>div p = paragraph elements within div elements<br/>div > p = paragraph elements with parents are div elements<br/>div + p = paragraph elements placed immediately after div elements<br/>p ~ ul = ul elements preceded by a paragraph element<br/>[attr] = elements with attr attribute<br/>[attr=x] = elements with attr attribute equal to x<br/>[attr~=x] = elements with attr attribute containing the word 'x'<br/>[attr|=x] = elements with an attr attribute value starting with 'x'<br/>a[href^='x'] = a elements with href attribute value beginning with 'x'<br/>a[href$='x'] = a elements with href attribute value ending with 'x'<br/>a[href*='x'] = a elements with href attribute value containing substring 'x'<br/>a:active = active link<br/>p::after/before = insert something after/before each paragraph element<br/>input:checked/disabled/enabled = every checked/disabled/enabled input element<br/>x:empty = every x element with no children</div>)}
		]}/*,
		{chapter: "DOM Traversal and Manipulation", sections: [
			{heading: "", body: ""}
		]},
		{chapter: "Performance", sections: [
			{heading: "Document Fragments", body: ""},
			{heading: "Node Caching", body: ""}
		]},
		{chapter: "CSS", sections: [
			{heading: "Layout", body: ""},
			{heading: "Responsive Design", body: ""},
			{heading: "Adaptive Design", body: ""},
			{heading: "Specificity", body: ""},
			{heading: "Namespacing and Naming of ClassNames", body: ""}
		]},
		{chapter: "HTML", sections: [
			{heading: "", body: ""}
		]},
		{chapter: "System Design", sections: [
			{heading: "Rendering", body: ""}
		]}*/
	];
	return {
		type: "SELECT_INDEX",
		payload: {
			data: dataArray[index],
			chapters: dataArray.map((data) => data.chapter),
			index: index,
		}
	}
}