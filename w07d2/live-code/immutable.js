const user = {
  name: 'Alice',
  age: 40,
};

// snacks: ['pretzels']

// const copy = user;


// // spread operator
const copy = {
  ...user,
  name: 'Bob',
  // snacks: [
  //   ...user.snacks,
  //   'Doritos'
  // ]
};

// copy.name = 'Bob';

// copy.snacks.push('Doritos');

console.log(user);
console.log(copy);
