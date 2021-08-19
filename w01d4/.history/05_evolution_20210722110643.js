const animalNoises = ['Oink', 'Moo', 'Meow', 'Bark', 'Oof', 'Nehhhh', 'Boww', 'Haaay', 'Quack'];

// const whatTheAnimalDoes = (animalNoise) => {
//   console.log(`the animal says "${animalNoise}"`);
// };

const forEach = (arr, action) => {
  for (const element of arr) {
    action(element);
  }
};

// forEach(animalNoises, whatTheAnimalDoes);

// animalNoises.forEach((animalNoise) => {
//   console.log(`the animal says "${animalNoise}"`);
// });

// animalNoises.forEach(whatTheAnimalDoes);
