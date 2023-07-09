import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
   
  const[ todoList, setTodoList]= useState([
    { task: 'Get out of bed', date: 'Wed Sep 13 2017' },
    { task: 'Brush teeth', date: 'Thu Sep 14 2017' },
    { task: 'Eat breakfast', date: 'Fri Sep 15 2017' }
  ]);


  return (
    <div className="App">
      <Header></Header> 
     <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
