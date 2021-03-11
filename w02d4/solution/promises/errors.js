const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one')
  .then((data) => {
    console.log(data);
    return returnPromise('two');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('three');
  })
  .then((data) => {
    console.log(data);
    return returnRejectedPromise('four');
  })
  {}
  .then((data) => {
    console.log(data);
    return returnPromise('five');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six');
  })
  .catch((err) => {
    // throw err;
    console.log(err);
  })
