
import React from 'react';
function TodoListItem({TodoListItem, deleteTodoListItem,handleToggleDone}){
  const { id, task, done } = TodoListItem;

  const itemHandleToggleDone = () => {
    handleToggleDone(id);
  };
    
  return(
   
      <p style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {TodoListItem.task} 
         &nbsp;
         <input type="checkbox" checked={done} onChange={itemHandleToggleDone}></input>
        
         <button  
         onClick={() => deleteTodoListItem(TodoListItem.id)}>
            delete
         </button>
      </p>
    );   
    
}

export default TodoListItem
