import React from 'react'

function Counter() {

const [counter,setCounter] = React.useState(0)

const handleChange = (value) =>{
    setCounter(counter + value)
}

  return (
    <div>
      <h1 style={counter%2===0 ? {color:"green"} : {color:"red"}}>Counter {counter}</h1>
      <button onClick={() => handleChange(2)}>Double</button>
      <button onClick={() => handleChange(-1)}>Decrement</button>
    </div>
  )
}


export default Counter;

