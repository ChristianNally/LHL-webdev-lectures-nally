const promise = new Promise((resolve, reject) => {
  resolve('do you see this??');
  // reject('terrible error message');
});

console.log(promise);
promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
