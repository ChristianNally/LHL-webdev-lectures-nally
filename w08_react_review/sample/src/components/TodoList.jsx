import React from 'react';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = (props) => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onClick = (event) => {
    setTodos((prev) => {
      return [...todos, {description: newTodo}]
    });
    setNewTodo('');
  };

  useEffect(() => {
    axios.get('/json')
    .then(result => {
      console.log(result);
      setTodos(result.data);
    })
    .catch(error => console.log(error));
  },[]);

  return (
    <>
    <ul>
      {todos.map((todo,index) => <li key={index}><Todo description={todo.description} /></li>)}
    </ul>
    <input type="text" value={newTodo} onChange={onChange} />
    <button onClick={onClick}>Add</button>
    </>

  );
};

export default TodoList;