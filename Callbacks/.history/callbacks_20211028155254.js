// //
// // Expressions are evaluated into values
// //

// // the following looks normal

// const x = 3.3;
// const y = 2.3 + 1;
// const i = 1;
// const valid = false;
// const name = 'Mickey Mouse';


// but this is also valid, each line is just an expression that's evaluating to a value, and then JS moves on.

// 3.3;
// 2.3 + 1;
// 1;
// false;
// 'Mickey Mouse';

// the following function definition looks very natural

// function doSomethingWith(thisString){
//   console.log('This String:',thisString);
// }

// doSomethingWith('ELSE!!');

// // // but it's just like any other expression that can have a value!
// // // here is a function definition as a value

// const doSomethingWithThisString = function(thisString){
//   console.log('This String:',thisString);
// };

// doSomethingWithThisString('Something!!'); // notice the syntax, and how the variable can now be executed since it is function valued

// //
// // So now... do you believe that functions can be values just like other types of variable?
// //

// //
// // callbacks are function-valued parameters (i.e. a parameter of some OTHER function)
// //

function performYourActionThreeTimes(action){
  for (let i = 0; i < 3; i++){
    action('i=' + i); // action is a parameter that takes on a value, as passed in when performYourActionThreeTimes is called.
  }
}


// function performYourComplexActionThreeTimes(action){
//   for (let i = 0; i < 3; i++){
//     action('i=' + i,i); // action is a parameter that takes on a value, as passed in when performYourActionThreeTimes is called.
//   }
// }

// performYourComplexActionThreeTimes((one,two)=>{
//   console.log("one:",one);
//   console.log("two:",two);
// });

// // executeThis(num);
// // executeThis(33);


const potato = param => console.log('MonkeyFuzz!:', param);


performYourActionThreeTimes(potato);



// // performYourActionThreeTimes( (p)=>{let jj = 41; jj++; console.log('p=',p,' jj=',jj); } );



// // performYourActionThreeTimes(function(){




// // });


// const doSomethingElseWithThisString = (thisString) => {
//   console.log('Else With This String:',thisString);
// };

// performYourActionThreeTimes(doSomethingElseWithThisString);

// performYourActionThreeTimes((p)=>{
//   let jj = 41;
//   jj++;
//   console.log('p=',p,' jj=',jj);
// });


// // executeMe(33);
// // const num = 34;
// // executeMe(num);

// // // // 
// // // // an anonymous function is where you pass in the function valued parameter directly
// // // //



