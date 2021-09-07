//TodoItem
import React from 'react';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <li>"THIS"</li>
      <li>{props.task}</li>
    </React.Fragment>
  );
}

export default TodoItem;
