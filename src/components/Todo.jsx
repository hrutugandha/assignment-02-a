import React from 'react'


function Todo (){


// read inputs
// update todos
// re-render todos when updated

let [value,setValue] = React.useState("");
const [todos,setTodos] = React.useState([]);

  return (
    <div>
      <h1>Todo Application</h1>
      <input type="text" />
      {todos.map((todo) => {
        return <div>{todo}</div>
      })}
      <button>Add</button>
    </div>
  )
}

export default Todo;