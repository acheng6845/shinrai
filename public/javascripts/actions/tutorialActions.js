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
			{heading: "", body: ""}
		]},
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