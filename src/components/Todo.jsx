import React from 'react'
import "../App.css"


function Todo (){


// read inputs
// update todos
// re-render todos when updated

const [query,setQuery] = React.useState("");
const [todoList, setTodoList] = React.useState([]);

const handleAdd = () =>{
  const payload = {
    title: query,
    status: false,
    checked: false,
  }
  setTodoList([...todoList, payload]);
}

  return (
    <div>
      <h1>Todo Application</h1>
      <input type="text" value ={query} onChange={(e) => setQuery(e.target.value)} placeholder="Add something..."/>
      <button onClick={handleAdd}>Add</button>
      {todoList.map((todo) => {
        return <div>{todo.title}</div>
      })}
    </div>
  )
}

export default Todo;