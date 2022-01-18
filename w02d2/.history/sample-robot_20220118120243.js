


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
    if (nextAction){
      nextAction();
    }
  }, millisecondsFromNow);
};


//
// Look
//
const look = () => { 
  doAction("Look!", 342, look); 
}

//
// Get Up
//
const getUp  = () => { 
  doAction("Get Up!", 5000, getUp); 
}

//
// Walk
//
const walk = () => { 
  doAction("Walk!", 4000, openTheDoor); 
}
//
// openTheDoor
//
const openTheDoor  = () => { 
  doAction("Open The Door!", 7000, walkThroughTheDoor); 
}
//
// walkThroughTheDoor
//
const walkThroughTheDoor  = () => { 
  doAction("Walk Through The Door!", 2000, null);
}

console.log("I am done being programmed.");

look();
getUp();
walk();

console.log("This is the END of the main thread.");
console.log("The Event Loop will Now Begin.");
