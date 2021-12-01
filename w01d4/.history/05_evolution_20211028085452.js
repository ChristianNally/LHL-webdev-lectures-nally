const animalNoises = ['Oink', 'Moo', 'Meow', 'Bark', 'Oof', 'Nehhhh', 'Boww', 'Haaay', 'Quack'];

const forEach = (arr, action) => {
  console.log('this is our version:');
  for (const element of arr) {
    action(element);
  }
};

// animalNoises.forEach((animalNoise) => {
//   console.log(`the animal says "${animalNoise}"`);
// });

forEach(animalNoises, animalNoise => console.log(`the animal says "${animalNoise}"`));

// animalNoises.forEach(whatTheAnimalDoes);
