function thisIsAFunction(output){
  console.log("Hello " + output);
}

thisIsAFunction("a thing");

//
//  
//

const anotherFunction = (callback) => {
  console.log(`what is this dagger before me?!`);
  callback('skull');
};

anotherFunction((myParam)=>{
  console.log('Here is what anotherFunction decided to send me:'+myParam);
});

