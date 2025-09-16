import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function todoUpdate(todo){
    setTodo(todo);
  }

  function addTodo(newTodo) {
    setTodos([...todos,{id:Date.now(), todo:newTodo, isCompleted:false}])
    setTodo("");
  }

  function ontoggle(id){
    setTodos(todos.map(item=>{
      return item.id === id ? {...item, isCompleted:!item.isCompleted}:item
    }))
  }

  function onDelete(id){
    setTodos(todos.filter(item=>{
      return item.id !== id;
    }))
  }

  function onUpdate(id){

    let item=todos.filter(item=>{
      return item.id===id;
    })

    setTodo(item[0].todo);

    setTodos(todos.filter(item=>{
      return item.id !== id;
    }))

  }

  return (
    <div className='flex flex-col items-center absolute inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
      <Header addTodo={addTodo} todoUpdate={todoUpdate} todo={todo} />
      <ToDoList todos={todos} ontoggle={ontoggle} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  )
}

export default App
