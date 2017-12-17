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
			{heading: "Function Declaration", body: "On the other hand, function declarations - function example() {} - are also hoisted to the top of the script, but their contents/definitions go along with them. Furthermore, function declarations are hoisted ahead of variable declarations."},
			{heading: "Function Expression", body: "But, function declarations - var func = () => {} - are called in-line."},
			{heading: "Function Scoping", body: "The lexical scope of a function is the content within its brackets, i.e., function foo() {scope}."},
			{heading: "Block Scoping", body: "Not to be confused, the scope within if, while, and for statements are considered block scopes. These statements share their scope with the global scope unless the variables were instantiated with const or let."}
		]},
		{chapter: "Functions"},
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