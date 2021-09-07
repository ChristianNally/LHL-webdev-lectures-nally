//TodoItem
import React from 'react';
// import Fragment from 'react';

const TodoItem = (props) => {
  return (
    <>
      <li>Buy Things</li>
      <li>{props.task}</li>
    </>
  );
}

export default TodoItem;
