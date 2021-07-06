import {useState} from 'react';

// const handleClick = (setNumVisitors, numVisitors) => {
//   setNumVisitors(numVisitors + 1);
//   setNumVisitors(numVisitors + 1);
//   setNumVisitors(numVisitors + 1);
// };

const VisitorCounter = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const handleClick = () => {
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 2);
    // setNumVisitors(numVisitors + 1);

    // [1, 2, 3].map(item => {
    //   return item * 2;
    // });

    setNumVisitors(prev => prev + 1);
    setNumVisitors(prev => prev + 1);
    setNumVisitors(prev => prev + 1);
  };

  return (
    <div>
      <h2>Visitor Counter: {numVisitors}</h2>
      <button
        // onClick={() => handleClick(setNumVisitors, numVisitors)}
        onClick={handleClick}
      >New Visitor</button>
    </div>
  );
};

export default VisitorCounter;
