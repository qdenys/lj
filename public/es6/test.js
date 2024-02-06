'use strict';

// средство es6: блок "левых" объявлений
const sentences = [
	{subject: 'HTML', verb: 'is', object: 'small'},
	{subject: 'CSS', verb: 'is', object: 'middle'},
];

// средство es6: деструктуризации объекта
function say({subject, verb, object}) {
	// средство es6: строки шаблона
	console.log(`${subject} ${verb} ${object}`)
}

// средство es6: for..of
for (let s of sentences) {
	say(s);
}
