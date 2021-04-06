function wait(seconds){
    let now = (new Date()).getTime();
    var waitTill = new Date( now + seconds * 1000);
    while(waitTill > new Date()){
        // do nothing
    };    
}

console.log("this line is first");

setTimeout( ()=>{
    console.log("this line was scheduled.");
}, 3000 );

wait(10);

console.log("this is the last line");
