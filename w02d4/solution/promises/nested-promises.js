const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

returnPromise('one')
  .then((data) => {
    console.log(data);
    returnPromise('two')
      .then((data) => {
        console.log(data);
        returnPromise('three')
          .then((data) => {
            console.log(data);
          });
      });
  });

returnPromise('one')
  .then((data) => {
    console.log(data);
    return returnPromise('two');
  })
  .then
