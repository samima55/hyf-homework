import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import todoListData from './components/TodoListData';
import { useState } from 'react';
import Timer from './components/Timer';


function App() {

  const[ todoList, setTodoList]= useState([]);
  
function handleAddTodo(){
  const randomId = Math.floor(Math.random() * todoListData.length);
  const randomText= todoListData[randomId].task
    const newTodo = {
      id: randomId,
      task: randomText,
    };
    setTodoList([...todoList, newTodo]);
}

function handleToggleDone (id) {
  setTodoList(todoList.map(todoItem => {
    if (todoItem.id === id) {
      return {
        ...todoItem,
        done: !todoItem.done
      };
    }
    return todoItem;
  }));
};


  function deleteTodoListItem(id) {
    setTodoList(todoList.filter((TodoListItem) => TodoListItem.id !== id));
  }

  return (
    <div className="App">
     <Header></Header> 
     <Timer></Timer>
     <AddTodo handleAddTodo={handleAddTodo}></AddTodo>
     <TodoList todoList={todoList} handleToggleDone={handleToggleDone} deleteTodoListItem={deleteTodoListItem}></TodoList>
    </div>
  );
}

export default App;
