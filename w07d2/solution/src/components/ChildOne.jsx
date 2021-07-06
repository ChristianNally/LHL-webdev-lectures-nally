import {useState} from 'react';

const ChildOne = (props) => {
  const [childDay, setChildDay] = useState('');
  
  return (
    <div>
      <h2>ChildOne!!!</h2>
      <input 
        value={childDay}
        onChange={event => setChildDay(event.target.value)}
      />
      <button onClick={() => props.setDay(childDay)}>Set the day</button>
    </div>
  );
};

export default ChildOne;
