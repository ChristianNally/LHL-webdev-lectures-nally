import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ContextHolder from './ContextHolder';

const Parent = (props) => {

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