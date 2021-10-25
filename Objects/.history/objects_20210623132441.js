/**

Types in JS
    Number
    String
    Boolean
    Null
    Undefined
    Object
    Symbol (used with Objects)
  
 */

let animal; // ( this is a Declaration )
animal = 'Monkey'; //  ( this is an Initialization using a string 'literal' )
//       OR
let beast = 'Chimp'; // ( Declaration AND an Initialization using a string 'literal' )


// The following is NOT the best way to organize a set of data, you can't loop over it!

voterOneName = 'Peter';
voterTwoName = 'Paul';

voterThreeName = 'Mary';
voterOneAge = 33;

voterTwoAge = 36;
voterThreeAge = 39;

voterOneSIN = 123456789;

//
// OBJECT LITERALS
//

let voter = {
  name: 'Lefty Larry',
  age: 49,
  sin_number: 123456789,
};
console.log('voter:',voter);

// dot notation
console.log("voter.name:",voter.name);

// update a value on an object
voter.age = 50;
console.log("voter after update:",voter);

// square brackets notation
console.log("voter['name']:",voter['name']);

// square brackets notation is useful when your key name is stored in a variable.
const key = 'name';
console.log("voter[key]:",voter[key]);

// typeof operator evaluates to the type of the expression... check out this type:
console.log('typeof voter:',typeof voter);

//
// METHODS
//

voter = {
  name: 'Lefty Larry',
  age: 49,
  sin_number: 123456789,
  speak: function(){
    console.log('Hello, Cruel World!');
  },
  vote: function(candidate){ // cannot use an arrow function here
    console.log('I am voting for:',candidate);
    console.log('My SIN number is:',this.sin_number);
  },
};

voter.vote("Cheese McBurger");

//
// An Array of Objects
//
const voters = [];

voters.push({name: 'Peter',age: 45, sin_number: 123456789});
voters.push({name: 'Paul',age: 46, sin_number: 987654321});
voters.push({name: 'Mary',age: 47, sin_number: 246813579});

//
// e.g. Math object
//

console.log("Math:",Math.PI);

console.log("Math.random():",Math.random());

// primitive types vs. referenced types

console.log("console:",console);

// http://pythontutor.com/visualize.html#code=let%20object1%20%3D%20%7Bname%3A%20'Christian%20Nally',%20age%3A%2050%7D%3B%0Alet%20object2%20%3D%20object1%3B%0A%0Aobject2%5B'age'%5D%20%3D%2053%3B%0A%0Aconsole.log%28%22object1%3A%22,object1%29%3B%0Aconsole.log%28%22object2%3A%22,object2%29%3B%0A&cumulative=false&curInstr=5&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
