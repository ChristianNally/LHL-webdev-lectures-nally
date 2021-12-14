import {useContext} from 'react';
import ContextHolder from './ContextHolder';

const ChildOne = (props) => {

  const {counter} = useContext(ContextHolder);

  return (
    <h2>ChildOne</h2>
  <h3>Current Count: {counter}</h3>
  );

};

export default ChildOne;