const start = Date.now();


function sleepFor(sleepDuration) {
  const nowObject = new Date();
  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

//
// Look
//

console.log("Look!");

//
// Get Up
//

console.log("Get Up!");

//
// Walk
//

console.log("Walk!");

//
// openTheDoor
//

console.log("Open The Door!");

//
// walkThroughTheDoor
//

console.log("Walk Through The Door!");

console.log("I am done being programmed.");
