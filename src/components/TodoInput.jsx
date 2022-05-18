import React from 'react'

function TodoInput({setTodoList}) {

  const [query,setQuery] = React.useState("");


  return (
    <div>
       <input  type="text" value ={query} onChange={(e) => setQuery(e.target.value)} placeholder="Add something..."/>
      <button>Add</button>
    </div>
  )
}

export default TodoInput
