
import TodoListItem from "./TodoListItem"

function TodoList({todoList, deleteTodoListItem, handleToggleDone}){

  

    return(
    <div tyle={{
        width: "800px",
        margin: "0 auto",
      }}>
        
   <ul>

{todoList.map((todoItem) => (
        <TodoListItem
         key={todoItem.id}
         TodoListItem={todoItem}
         handleToggleDone={handleToggleDone}
         deleteTodoListItem={deleteTodoListItem}

        />
      ))}
      </ul>
    </div>
    ) 
}

export default TodoList