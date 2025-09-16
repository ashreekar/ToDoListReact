import TodDoItem from "./ToDoItem";

// We will recieve todos(array), ontoggle,onDelete,onUpdate function to pass as props
function ToDoList(props){
    // props-->[{id:,todo:,isCompleted}]
    return (
        <section className="flex flex-col items-center w-[90%] md:w-[50%] rounded-md mt-3 bg-amber-200 min-h-[75vh] border-2 border-black gap-2 p-2 m-2">
            {
                // Rendering in a map as each items and passing id as a seperate key
                // 3 function will do toggle(completion),deletion,updationg respectivly
                props.todos.map(item=>{
                    return <TodDoItem key={item.id} item={item} ontoggle={props.ontoggle} onDelete={props.onDelete} onUpdate={props.onUpdate} />
                })
            }
        </section>
    )
}

export default ToDoList;