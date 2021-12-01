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

const thingToDo = animalNoise => console.log(`the animal says "${animalNoise}"`);

forEach(animalNoises, thingToDo);

// animalNoises.forEach(whatTheAnimalDoes);










const arrayOfFunctions = [func1, func2, func3];





function processor(listOfActions, data){

  listOfActions.forEach( (eachFunction)=>{  eachFunction(data)  } );

}










