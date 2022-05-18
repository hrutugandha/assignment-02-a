import React from 'react'
import "../App.css"
import { v4 as uuidv4 } from 'uuid';
import styles from './todo.module.css';


function Todo (){


// read inputs
// update todos
// re-render todos when updated

const [query,setQuery] = React.useState("");
const [todoList, setTodoList] = React.useState([]);

const handleAdd = () =>{
  const payload = {
    id: uuidv4(),
    title: query,
    status: false,
    isChecked: false,
  }
  setTodoList([...todoList, payload]);
  setQuery("")
}

  return (
    <div className={styles.todo}>
      <h1>Todo Application</h1>
      {todoList.map((todo) => {
        return <div className={styles.todoContainer}>
          <div className={styles.todoDiv}>
          <input type="checkbox" className={styles.checkbox} />
          <div  className={styles.text} key={todo.id}>{todo.title}</div>
          </div>
        </div>
      })}
      <input type="text" className={styles.text} value ={query} onChange={(e) => setQuery(e.target.value)} placeholder="Add something..."/>
      <button onClick={handleAdd} className={styles.text}>Add</button>
    </div>
  )
}

export default Todo;