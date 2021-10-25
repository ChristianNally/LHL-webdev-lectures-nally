const supernova = (max, processTheSize)=>{
  const size = Math.random() * max;
  const result = processTheSize(size);
  console.log('Bang! NEUTRINOS! Light! Awe.     size:',size,' result of processing the size:',result);
  return size;
};


supernova(100);
supernova(10000);

////





