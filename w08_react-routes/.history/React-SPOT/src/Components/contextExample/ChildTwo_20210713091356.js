import {useContext} from 'react';
import ContextHolder from './ContextHolder';

const ChildTwo = (props) => {

  const {setCounter} = useContext(ContextHolder);

  return (
    <h2>ChildTwo</h2>
  );

};

export default ChildTwo;
