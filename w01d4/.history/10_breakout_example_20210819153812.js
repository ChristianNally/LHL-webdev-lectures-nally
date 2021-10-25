const supernova = (max, processTheSize)=>{
  const size = Math.random() * max;
  const result = processTheSize(size);

  const output = `Bang! NEUTRINOS! Light! Awe.   size:${size} result of processing the size: ${result}`;
  console.log('output:',output);
  return output;
};

supernova(100, ()=>{});


supernova(1000, function(theSize){
  if (300 > theSize){
    return 'tiny!';
  } else if (600 > theSize) {
    return 'medium';
  } else {
    return 'massive!'
  }
});


supernova(10000);





