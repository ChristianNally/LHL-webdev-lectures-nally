const start = Date.now();

//
// a doAction function which console logs the acts taken by the robot
// by scheduling messages to appear when the action is finished
//
const doAction = function(name,millisecondsFromNow,nextAction){
  console.log((Date.now() - start));
  console.log(`${name} starting :`);
  console.log('::::: This will take ' + millisecondsFromNow + ' seconds.');
  setTimeout(()=>{
    if (nextAction !== null){
      nextAction();
    }
    console.log(`::::: ${name} ended : ${millisecondsFromNow} later`);
  },millisecondsFromNow);
}

//
// Look
//
const look = ()=>{
  doAction("look",1,null);
};

//
// Get Up
//
const getUp = ()=>{
  doAction("get up",5,walk);
};

//
// Walk
//
const walk = ()=>{
  doAction("walk",7,openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = ()=>{
  doAction("open the door",3,walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = ()=>{
  look();
  doAction("walk through the door",4,null);
}

setInterval(()=>{
  look();
},1500);

getUp();

console.log("Default Programming is Finished.");
console.log("Starting Input Based Programming.");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
});
