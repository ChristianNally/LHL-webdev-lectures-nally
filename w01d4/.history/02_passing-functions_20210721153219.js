// callback
// a function that gets passed to another function, to be invoked by that function

// higher order function (HOF)
// a function that accepts another function as an argument

const runMyFunction = function(callback) {
  // console.log(callback.toString());
  callback('Elise');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addTwo = function(num) {
  console.log(num + 2);
};

runMyFunction(sayHello);
runMyFunction(addTwo);
