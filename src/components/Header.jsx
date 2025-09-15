import { useState } from "react";

function Header({addTodo}){
    const [todo,setTodo]=useState("");

    function handleChange(e){
        setTodo(e.target.value);
    }

    function handleAdd(){
        addTodo(todo)
    }

    return (
        <header className="cover">
                <h1>ToDo<span>List</span></h1>
                <div className="addfields">
                    <input type="text" value={todo} placeholder="Add your tasks here" onChange={(e)=>{
                        handleChange(e);
                    }} />
                    <button className="cursor-pointer" onClick={handleAdd}>Add</button>
                </div>
        </header>
    )
}

export default Header;