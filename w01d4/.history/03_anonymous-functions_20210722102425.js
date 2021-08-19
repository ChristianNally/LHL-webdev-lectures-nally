const runMyFunction = function(callback) {
  // console.log(callback.toString());
  callback('Elise');
};

//
// lots of other code in here
//

// i need an action to feed into runMyFunction
const sayHello = function(name){
  console.log('Hello, ',name);
}

runMyFunction(sayHello);


// // runMyFunction(function(name) {
// //   console.log(`hola ${name}`);
// // });
