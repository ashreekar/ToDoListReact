import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {

  const [todos, setTodo] = useState([]);
  function addTodo(newTodo) {
    setTodo([...todos,{id:Date.now(), todo:newTodo, isCompleted:false}])
  }

  return (
    <>
      <Header addTodo={addTodo} />
      <ToDoList todos={todos} />
    </>
  )
}

export default App
