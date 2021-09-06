import React from "react";
import { useState } from "react";
// import { useEffect } from "react";

import TodoItem from './components/TodoItem';
import './App.css';

//App sample using TodoItem

function App() {

  console.log("App component's function called.");

  //
  // Some values that React can't keep track of, but uses anyway.
  //
  // const items = [];
  // items.push('hello');
  // items.push('world');
  // items.push('welcome');
  // items.push('to');
  // items.push('state');

  //
  // Using STATE Instead
  //
  const [items, setItems] = useState([]);
//  setItems(['hello', 'world', 'welcome', 'to', 'state']);

  setTimeout(() => {
    setItems(['hello', 'world', 'welcome', 'to', 'state'])
  }, 4000);

  return (
    <div className="App">
      <TodoItem task={"Buy Pizza"}/>
      {JSON.stringify(items)}
    </div>
  );
}

export default App;
