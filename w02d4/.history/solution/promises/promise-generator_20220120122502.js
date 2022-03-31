
const returnPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`yay! resolved!: ${value}`), delay);
  });
};

const returnRejectedPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${value}`), delay);
  });
};

const returnRandomPromise = (value, delay = 1000) => {
  const num = Math.floor(Math.random() * 2);
  if (num < 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`yay! resolved!: ${value}`), delay);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${value}`), delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise,
  returnRandomPromise
}
