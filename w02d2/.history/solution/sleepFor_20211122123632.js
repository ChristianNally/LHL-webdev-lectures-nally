const fs = require('fs');
console.log('fs',fs);

setTimeout( ()=>{ console.log("I was scheduled.")  }, 444 );

function sleepFor(sleepDuration) {
  const nowObject = new Date();
  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}


console.log("begin");
sleepFor(5000);
console.log("end");
