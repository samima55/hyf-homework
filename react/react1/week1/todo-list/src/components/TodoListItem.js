
import React from 'react';
function TodoListItem({TodoListItem}){
    return(
   
      <p>{TodoListItem.task} 
        {TodoListItem.date}
      </p>
    );   
    
}

export default TodoListItem
