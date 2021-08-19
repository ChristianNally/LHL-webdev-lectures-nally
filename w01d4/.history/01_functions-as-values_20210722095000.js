// function sayHello(name) {
//   const output = `hello there ${name}`;
//   console.log('output:',output);
//   return output;
// }

const sayHello = function(string) {
  const output = `hello there ${string}`;
  console.log('output:',output);
  return output;
};

sayHello(' to my little friend.');

// // sayHello('Bob');

// const myOtherVar = sayHello;

// myOtherVar.something = 'something else';
// console.log(myOtherVar.something);

// const addTwo = function(num) {
//   // console.log(num + 2);
//   return num + 2;
// };

// const myFuncs = [addTwo, sayHello];

// const result = myFuncs[0](5);
// console.log('result', result);

// // console.log('whatever it gave us back:', myOtherVar.toString());
// // myOtherVar('Carol');

// // const somethingElse = myOtherVar;
// // somethingElse('Dean');

// // const firstName = 'Alice';
// // const otherName = firstName;

// // assertEqualArrays(middle([1,2,3]), [2]);
