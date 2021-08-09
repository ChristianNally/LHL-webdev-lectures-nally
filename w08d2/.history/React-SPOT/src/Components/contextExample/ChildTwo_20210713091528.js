import {useContext} from 'react';
import ContextHolder from './ContextHolder';

const ChildTwo = (props) => {

  const {setCounter} = useContext(ContextHolder);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <h2>ChildTwo</h2>
    <button onClick={handleClick}>Plus One</button>
  );

};

export default ChildTwo;
