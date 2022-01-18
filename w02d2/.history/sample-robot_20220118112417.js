


// 1. "Main Thread"


// console.log(); // this happens right away
// setTimeout( callback, delay );
// setTimeout( () => {}, 1235 );





// 2. "Event Loop"
// DOES NOT START UNTIL THE MAIN THREAD IS FINISHED

// The Event Loop processes 'actions', 'activities', (functions, callbacks, morsels of computation, processes, )
// ... as they were scheduled to happen.









const start = Date.now();


function doAction(name, millisecondsFromNow, nextAction){
  console.log(`${name} starting. it will take ${millisecondsFromNow} milliseconds. `);
  setTimeout( () => {
    console.log(`${name} ended ${millisecondsFromNow} later.`);
  }, millisecondsFromNow);
};


//
// Look
//
doAction("Look!",1000);
//
// Get Up
//
doAction("Get Up!",3000);
//
// Walk
//
doAction("Walk!",5000);
//
// openTheDoor
//
doAction("Open The Door!",4000);
//
// walkThroughTheDoor
//
doAction("Walk Through The Door!",2000);




console.log("I am done being programmed.");
