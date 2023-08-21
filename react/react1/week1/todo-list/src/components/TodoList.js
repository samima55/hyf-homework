
import TodoListItem from "./TodoListItem"

function TodoList({todoList}){
    return(
    <div tyle={{
        width: "800px",
        margin: "0 auto",
      }}>

{todoList.map((todoItem) => (
        <TodoListItem
        key={todoItem.task}
        TodoListItem={todoItem}
        />
      ))}
    </div>
    ) 
}

export default TodoList