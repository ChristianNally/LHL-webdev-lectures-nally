const monkeyfuzz = require('./promise-generator');
const returnPromise = monkeyfuzz.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);

console.log('first');
console.log('second');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('3 seconds later:',promise);
// },3000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('first');
    console.log('second');
    console.log("newData:",newData);
    console.log('data:', data);
  };
