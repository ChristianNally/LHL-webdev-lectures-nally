//TodoItem
import React from 'react';

const TodoItem = (props) => {
  return (
    <li>{props.task} <button onClick={() => {props.onDelete(props.id)}}>Delete</button></li>
  );
}

export default TodoItem;
