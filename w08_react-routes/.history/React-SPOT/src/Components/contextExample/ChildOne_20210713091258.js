import {useContext} from 'react';
import ContextHolder from './ContextHolder';

const ChildOne = (props) => {

  const {counter} = useContext(ContextHolder);

  return (
    <h2>ChildOne</h2>
  );

};

export default ChildOne;