// advantages of arrow functions
// 1. no need for the "function" word
// 2. single argument no need for parens
// 3. if only one line of code, you can omit curly braces
// 4. arrow functions without curly braces automatically return whatever is to the right of the arrow
// GOTCHA: if you're using the word 'this'

// const sayHello = function(name) {
//   return `hello there ${name}`;
// };

const runMyFunction = function(callback) {
  callback('Monkey Fuzz!');
};

runMyFunction( arg1 => console.log(arg1) );

const sayHello = name => `hello there ${name}`;

const result = sayHello('Tommy!');
console.log(result);

// // function() {}
// // () => {}

// // if (true) console.log('hello');

