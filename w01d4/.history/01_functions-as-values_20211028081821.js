
function sayHello(name) {
  let x = name;
  const output = `hello there ${name}`;
  console.log('output:',output);
  return output;
}

let age = 50;

// const sayHello = function(string) {
//   const output = `hello there ${string}`;
//   console.log('output:',output);
//   return output;
// };

const putTheReturnValueInHere = sayHello(' to my little friend.');

const myOtherVar = sayHello;

// myOtherVar.something = 'something else';
console.log('myOtherVar("monkey fuzz!")', myOtherVar('monkey fuzz!'));

const addTwo = function(num) {
  console.log('sum:',num + 2);
  return num + 2;
};

const myFuncs = [ addTwo, sayHello ];

// const thisIsAnObject = {first: 'a', second: 'b'};
// const thisIsAnArray = ['all','manner',544,TRUE];

// thisIsAnArray.forEach(function(){ console.log("blah"); });

const result = myFuncs[0](5);
console.log('result:', result);

console.log('sayHello:',sayHello.toString());


// // // console.log('whatever it gave us back:', myOtherVar.toString());
// // // myOtherVar('Carol');

// // // const somethingElse = myOtherVar;
// // // somethingElse('Dean');

// // // const firstName = 'Alice';
// // // const otherName = firstName;

// // // assertEqualArrays(middle([1,2,3]), [2]);
