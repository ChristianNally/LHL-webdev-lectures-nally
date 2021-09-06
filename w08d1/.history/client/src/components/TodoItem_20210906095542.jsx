//TodoItem
import React from 'react';
import Fragment from 'react';

const TodoItem = (props) => {
  return (
    <Fragment>
      <li>Buy Things</li>
      <li>{props.task}</li>
    </Fragment>
  );
}

export default TodoItem;
