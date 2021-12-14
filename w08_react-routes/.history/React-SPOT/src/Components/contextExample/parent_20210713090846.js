import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ContextHolder from './ContextHolder';
import {useState} from 'react';

const Parent = (props) => {
  const [counter,setCounter] = useState(0);

  return (
    <div>
      <h2>Parent</h2>
      <ContextHolder.Provider>
        <ChildOne/>
        <ChildTwo/>
      </ContextHolder.Provider>
    </div>
  );

};

export default Parent;