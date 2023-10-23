

import { useState, useEffect } from "react";

function AddTodo({handleAddTodo}){
 return(
<button onClick={handleAddTodo}>Add todo</button>
 )
}

export default AddTodo