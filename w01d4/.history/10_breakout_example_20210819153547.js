const supernova = (max, processTheSize)=>{
  const size = Math.random() * max;
  const result = processTheSize(size);

  const output = `Bang! NEUTRINOS! Light! Awe.   size:${size} result of processing the size: ${result}`;
  console.log('output:',output);
  return output;
};

supernova(100, ()=>{});
supernova(1000, function(theSize){

});
supernova(10000);





