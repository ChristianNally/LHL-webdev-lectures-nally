const start = Date.now();

//
// utility function to write interesting information on standard output.
//
function doAction(message,duration,next){
    setTimeout(
        () => console.log((Date.now() - start) + ': Starting :' + message + ':: This will take ' + duration + ' seconds.'),
        0
    );
    setTimeout(
        () => { // THIS IS A MULTILINE ANONYMOUS FUNCTION
          console.log('Ending :' + message + ':: This took ' + duration + ' seconds.');
          if (next === null){
            // do nothing
          } else {
            next();
          }
        },
        duration*1000
    );
};
function flexArm(degrees){
    // flex the arm a certain number of degrees
    return "flexed " + degrees + " degrees";
}

const flexLeg = function(degrees){
    return "Flexed Leg " + degrees + " degrees";
}

const speak = (message, medium) => {
    const output = 'Yo! Dude! I gots somethin\' to say yo!' + message;
//    console.log(output);
    medium(message);
}
function wait(seconds){
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while(waitTill > new Date()){
        // do nothing
    };    
}

const standUp = () => {
    doAction('standUp',6,walkToDoor);
}

const walkToDoor = function(){
    doAction('walkToDoor',3,openDoor);
}

const openDoor = () => {
    doAction('openDoor',10,walkThroughDoorWhileHoldingItOpen);
}

const walkThroughDoorWhileHoldingItOpen = () => doAction('walkThroughDoorWhileHoldingItOpen',9,null);

const lookWithEyes = () => doAction('look with 👀 eyes',2,null);
const listenWithEars = () => doAction('listening with 🎤 microphone',1,null);

standUp();
setInterval(lookWithEyes,3000);
setInterval(listenWithEars,1500);

// lookWithEyes();
// listenWithEars();
// walkToDoor();
// openDoor();
// walkThroughDoorWhileHoldingItOpen();



