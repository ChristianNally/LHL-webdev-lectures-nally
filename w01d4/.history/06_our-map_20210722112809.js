const ourMap = (arr, callback) => {
  const output = [];

  // iterate over the provided arr
  for (const element of arr) {
    // call the callback for each element of the array
    const returnVal = callback(element);

    // push the return value from the callback into output
    output.push(returnVal);
  }

  return output;
};

const animalNoises = ['Oink', 'Moo', 'Meow', 'Bark', 'Oof', 'Nehhhh', 'Boww', 'Haaay', 'Quack'];

const mappedArray = ourMap(animalNoises, animalNoise => `only the best animals say ${animalNoise}`);

console.log('animalNoises:',animalNoises);
console.log('mappedArray:',mappedArray);

// const builtInMap = animalNoises.map((animalNoise) => `the animal says ${animalNoise}`);
// console.log(builtInMap);
