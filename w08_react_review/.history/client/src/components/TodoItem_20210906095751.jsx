//TodoItem
import React from 'react';
// import Fragment from 'react';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <li>Buy Things</li>
      <li>{props.task}</li>
    </React.Fragment>
  );
}

export default TodoItem;
