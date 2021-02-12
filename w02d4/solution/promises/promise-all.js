const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnRejectedPromise('one', 1500);
const promiseTwo = returnPromise('two', 4000);
const promiseThree = returnRejectedPromise('three', 2000);
const promiseFour = returnPromise('four', 3000);

const promises = [promiseOne, promiseThree, promiseTwo, promiseFour];

Promise.all(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
