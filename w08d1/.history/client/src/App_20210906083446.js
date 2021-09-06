import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoItem from './components/TodoItem';
import './App.css';

//App sample using TodoItem

function App() {

  const items = [];

  items.push('hello');
  items.push('world');
  items.push('welcome');
  items.push('to');
  items.push('state');

  // const [items, setItems] = useState([]);
  // setItems(['hello', 'world', 'welcome', 'to', 'state']);

  return (
    <div className="App">
      <TodoItem task={"Buy Pizza"}/>
      {JSON.stringify(items)}
    </div>
  );
}

export default App;
