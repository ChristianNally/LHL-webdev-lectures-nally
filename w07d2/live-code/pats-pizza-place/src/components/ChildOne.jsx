import { useState } from 'react';
import { useEffect } from 'react';

const ChildOne = (props) => {

  const [childDay, setChildDay] = useState('');

  useEffect(()=>{
    console.log("useEffect was called.");
  },[childDay]);

  useEffect(()=>{
    console.log("useEffect 2 was called.");
  },[]);

  return (
    <div>
      <h1>This is ChildOne</h1>
      <input
        value={childDay}
        onChange={ event => setChildDay( event.target.value ) }
      />
      <button onClick={ () => props.setDay(childDay) }>Set the Day</button>
    </div>
  );

};

export default ChildOne;
