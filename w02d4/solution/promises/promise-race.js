const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const randomDelay = () => Math.floor(Math.random() * 5000);

const promiseOne = returnPromise('one', randomDelay());
const promiseTwo = returnPromise('two', randomDelay());
const promiseThree = returnPromise('three', randomDelay());

const promises = [promiseOne,  promiseTwo, promiseThree];

Promise.race(promises)
  .then((data) => {
    console.log(data);
  });
