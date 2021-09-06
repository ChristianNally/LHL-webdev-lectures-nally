//TodoItem
import React from 'react';

const TodoItem = (props) => {
  return (
    <li>{props.task}  <button onClick={props.onDelete}>Delete</button></li>
  );
}

export default TodoItem;
