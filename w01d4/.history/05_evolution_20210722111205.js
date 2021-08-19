const animalNoises = ['Oink', 'Moo', 'Meow', 'Bark', 'Oof', 'Nehhhh', 'Boww', 'Haaay', 'Quack'];

const forEach = (arr, action) => {
  for (const element of arr) {
    action(element);
  }
};

forEach(animalNoises, animalNoise => console.log(`the animal says "${animalNoise}"`));

// animalNoises.forEach((animalNoise) => {
//   console.log(`the animal says "${animalNoise}"`);
// });

// animalNoises.forEach(whatTheAnimalDoes);
