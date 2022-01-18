
# Review of how functions are defined

function iHaveAName(callback){
    // does some stuff
    callback("monkeyfuzz");
    return something;
}

iHaveAName(  p2 => console.log('p2:',p2)  );



* allow for unique pieces of code that don't require repetition (this enables using an anonymous function)
* to supply a conditional statement?

# Why do we want to use callbacks?

* it is to abstract out the actual computation
* with asynchronous code you cannot retrieve the return value
  
 



# Robots

https://www.youtube.com/watch?v=_sBBaNYex3E

# What is asyncronicity?

# Events

# Nesting

# Advanced Reading

https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/
