const start = Date.now();

//
// a stub function 'wait' that simulates an action taking some time.
//
function wait(seconds){
  let now = (new Date()).getTime();
  var waitTill = new Date( now + seconds * 1000);
  while(waitTill > new Date()){
      // do nothing
  };    
}

//
// a doAction function which console logs the acts taken by the robot
// by scheduling messages to appear when the action is finished
//
const doAction = function(name,time,next){

}

//
// Look
//

//
// Get Up
//

//
// Walk
//

//
// openTheDoor
//

//
// walkThroughTheDoor
//

console.log("I am done being programmed.");
