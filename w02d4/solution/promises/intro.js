const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promise = returnPromise('first promise', 4444);
console.log(promise);

promise
  .then((data) => {
    console.log(data);
    return 'another thing';
  })
  .then((data) => {
    console.log(data);
  });
