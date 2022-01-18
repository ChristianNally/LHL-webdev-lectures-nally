const start = Date.now();

//
// a doAction function which console logs the acts taken by the robot
// by scheduling messages to appear when the action is finished
//
const doAction = function(name,time,next){
  console.log((Date.now() - start) + ': Starting :' + name + ':: This will take ' + time + ' seconds.');
  setTimeout(()=>{
    if (next !== null){
      next();
    }
    console.log('End : ' + name + ':: This took ' + time + ' seconds');
  },time*1000);
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

console.log("I am done being programmed.");
