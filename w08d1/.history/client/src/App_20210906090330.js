import React from "react";
import { useState } from "react";
const axios = require('axios');
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
  // setItems(['hello', 'world', 'welcome', 'to', 'state']);

  // setTimeout(() => {
  //   setItems(['hello', 'world', 'welcome', 'to', 'state'])
  // }, 4000);

  //
  // useEffect hook to update the state under React's control
  // (as if the state was being updated as a side-effect of something happening elsewhere)
  //

  axios.get('http://localhost:8080/todos').then((res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <TodoItem task={"Buy Pizza"}/>
      {JSON.stringify(items)}
    </div>
  );
}

// function App() {
//   const [items, setItems] = useState([]);
//   const [i, setI] = useState(0);
//   let num = 0;
//   const setNum = () => {
//     console.log(num);
//     num += 1;
//   }

//   return (
//     <div className="App">
//       <p>not state: {num} <button onClick={setNum}>Click</button></p>
//       <p>state: {i} <button onClick={() => setI( i + 1 )}>Click</button></p>

//     </div>
//   );
// }

export default App;
