// FUNCTION DEFINITIONS CAN BE VALUES TOO
// Compare the following three lines. See how there is a value on 
// the right hand side of the assignment operator?

const number = 5.5;
const text = "Hello, World";
const funct = function(parameter){ process.stdout.write(parameter*2 + " "); };

// In the first line above, the value is a real number 
// In the second line above, the value is a string
// In the third line above, the value is a FUNCTION

// PARAMETERS ARE PLACEHOLDERS FOR VALUES NOT KNOWN DURING WRITING

// An example where the parameter is a placeholder for a number
function addTen(value){
  output = value + 10;
  console.log(`addTen output is ${output}`);
}
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'); addTen(number);

// An example where the parameter is a placeholder for some text
function appendBlah(string){
  const output = string + " blah";
  console.log(`appendBlah output is "${output}"`);
}
console.log('\n\n\n\n'); appendBlah(text);

// A CALLBACK is a parameter that is a placeholder for a function
function doActionFourTimes(action){  // <--- action is a 'callback'
  for (let ii = 0; ii < 4; ii++){
    action(ii);   // <--- pay special attention to how the callback is executed
  } console.log('');
}
console.log('\n\n\n\n\n'); doActionFourTimes(funct);