import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Footer from './components/footer'

// Imported Header,ToDoList and footer component

function App() {
  //Have useState in root App only to maintain state at all levels
  //Defined 2 useState one for todo--string, todos--array of object
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) || []);
  const [todo, setTodo] = useState("");

  // To update todos and add to local staorage on every update
  useEffect(()=>{
    localStorage.setItem("Todos", JSON.stringify(todos));
  },[todos])

  // function that revecieves todo from Header and updates
  function todoUpdate(todo){
    setTodo(todo);
  }

  // Function that takes newTodo from header and adds to array of todos
  function addTodo(newTodo) {
    //todos-- [{id:any_id, todo:any_todo, isCompleted:bool}]
    // storing id for unique keys, todo to remember all todos and isCompleted as bool to rememeber
    setTodos([...todos,{id:Date.now(), todo:newTodo, isCompleted:false}])
    setTodo(""); // seetting todo to empty string
  }

  // recievs id from ToDoItem and updates the toggle of isCompleted
  function ontoggle(id){
    setTodos(todos.map(item=>{
      // return other items as same but id matching as isCompleted inverted
      return item.id === id ? {...item, isCompleted:!item.isCompleted}:item
    }))
  }

  // recievs id from ToDoItem and deletes the todo on click
  function onDelete(id){
    setTodos(todos.filter(item=>{
      return item.id !== id;
    }))
  }

  // recievs id from ToDoItem and updates the todo on click
  function onUpdate(id){

    let item=todos.filter(item=>{
      return item.id===id;
    })

    // this makes todo is available to edit
    setTodo(item[0].todo);

    setTodos(todos.filter(item=>{
      return item.id !== id;
    }))

  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
      {/* Sending addTodo and todoUpdate function along with todo that updates the input field */}
      <Header addTodo={addTodo} todoUpdate={todoUpdate} todo={todo} />
      {/* Sending todos array to render, ontoggle, onDlete, onUpdate function to track deletion,updation and toggle of completion */}
      <ToDoList todos={todos} ontoggle={ontoggle} onDelete={onDelete} onUpdate={onUpdate} />
      <Footer/>
    </div>
  )
}

export default App
