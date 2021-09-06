//TodoItem
import React from 'react'

const TodoItem = () => {
    return (<li>Buy Ketchup</li>)
}

export default TodoItem;
// ---

//App sample using TodoItem

function App() {
  return (
    <div className="App">
      <TodoItem />
    </div>
  );
}