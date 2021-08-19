const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// const firstName = 'Bob';
// sayHello(firstName);

// sayHello('Bob');

const runMyFunction = function(callback) {
  console.log(callback.toString());
  // callback('Elise');
};

runMyFunction(sayHello);

// runMyFunction(function(name) {
//   console.log(`hola ${name}`);
// });
