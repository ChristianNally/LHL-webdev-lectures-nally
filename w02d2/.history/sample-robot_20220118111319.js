


// 1. "Main Thread"


// console.log(); // this happens right away
// setTimeout( callback, delay );
// setTimeout( () => {}, 1235 );





// 2. "Event Loop"
// DOES NOT START UNTIL THE MAIN THREAD IS FINISHED

// The Event Loop processes 'actions', 'activities', (functions, callbacks, morsels of computation, processes, )
// ... as they were scheduled to happen.









const start = Date.now();

function sleepFor(sleepDuration) {
  const nowObject = new Date();
//  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}


function doAction(name, millisecondsFromNow){
  console.log(`${name} starting. it will take ${millisecondsFromNow} milliseconds. `);
  setTimeout( () => {}, millisecondsFromNow);
};


//
// Look
//
console.log("Look!");
sleepFor(1000);
//
// Get Up
//
console.log("Get Up!");
sleepFor(3000);
//
// Walk
//
console.log("Walk!");
sleepFor(5000);
//
// openTheDoor
//
console.log("Open The Door!");
sleepFor(4000);
//
// walkThroughTheDoor
//
console.log("Walk Through The Door!");
sleepFor(2000);




console.log("I am done being programmed.");
