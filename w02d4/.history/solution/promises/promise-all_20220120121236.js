const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnRejectedPromise('one', 1500);
const promiseTwo = returnRejectedPromise('two', 4000);
const promiseThree = returnRejectedPromise('three', 2000);
const promiseFour = returnRejectedPromise('four', 3000);

const promises = [promiseOne, promiseThree, promiseFour, promiseTwo];

Promise.all(promises)
  .then((data) => {
    console.log("success:",data);
  })
  .catch((err) => {
    console.log("something was rejected!:",err);
  });

