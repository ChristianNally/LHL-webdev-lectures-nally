import React, { useState } from 'react';

const Todo = (props) => {
  console.log('rendering component');
  const [edit,setEdit] = useState(false);
  const [checked,setChecked] = useState(false);
  const [value,setValue] = useState(props.description);
  const [field,setField] = useState(props.description);

  const onClick = () => {
    console.log('running onClick')
    setEdit(true);
  };

  const onChange = (event) => {
    console.log('running onChange');
    setField(event.target.value);
  };

  const onSubmit = () => {
    console.log('running onSubmit');
    setValue(field);
    setEdit(false);
  };

  const changeChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input type="checkbox" value={checked} onChange={changeChecked} />
      {edit &&
        <> 
        <input type="text" value={field} onChange={onChange} />
        <button onClick={onSubmit}>Update</button>
        </>
      }
      { !edit && 
        <span onClick={onClick} className={checked ? 'done' : ''}>
          {value}
        </span>      
      }
    </div>
  );
};

export default Todo;
