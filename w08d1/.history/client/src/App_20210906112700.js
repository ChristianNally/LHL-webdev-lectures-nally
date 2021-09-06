import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TodoItem from './components/TodoItem';
import './App.css';

const axios = require('axios');

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
  // Using STATE instead
  //
  const [items, setItems] = useState([]);

  //
  // useEffect hook to update the state under React's control
  // (as if the state was being updated as a side-effect of something happening elsewhere)
  //
  // useEffect(() => {
  //   setItems(['hello', 'world', 'welcome', 'to', 'state']);
  // }, []);

  // setTimeout(() => {
  //   setItems(['hello', 'world', 'welcome', 'to', 'state'])
  // }, 4000);

  //
  // WITHOUT the useEffect hook
  //
  // axios.get('http://localhost:8080/todos').then((res) => {
  //   console.log(res);
  // });

  //
  // WITH the useEffect hook 
  //
  useEffect(() => {
    axios.get('/todos')
    .then((res) => {
      setItems([...res.data]);
    });
  }, []);

  const onDeleteItem = (id) => {
    axios.post(`/todos/${id}/delete`)
    .then((res) => {
      setItems(items.filter(item => item.id !== id));
    });
  }

  const toDoItemComponentsArr = [];
  for (const item of items) {
    toDoItemComponentsArr.push(<TodoItem key={item.id} id={item.id} task={item.task} onDelete={onDeleteItem}/>);
  }

  return (
    <div className="App">
      <h1>TODO Items</h1>
      {toDoItemComponentsArr}
    </div>
  );
}

// function App() {
//   const [items, setItems] = useState([]);
//   const [i, setI] = useState(0);
//   let num = 0;
//   const setNum = () => {
//     console.log('Num:',num);
//     num += 1;
//   };

//   return (
//     <div className="App">
//       <p>not state: {num} <button onClick={setNum}>Click</button></p>
//       <p>state: {i} <button onClick={() => setI( i + num )}>Click</button></p>
//     </div>
//   );
// }

export default App;
