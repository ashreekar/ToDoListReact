import TodDoItem from "./ToDoItem";

function ToDoList(props){
    // props-->[{id:,todo:,isCompleted}]
    return (
        <section className="flex flex-col items-center w-[90%] md:w-[50%] rounded-md mt-3 bg-amber-200 min-h-[75vh] border-2 border-black gap-2 p-2 m-2">
            {
                props.todos.map(item=>{
                    return <TodDoItem key={item.id} item={item} ontoggle={props.ontoggle} onDelete={props.onDelete} onUpdate={props.onUpdate} />
                })
            }
        </section>
    )
}

export default ToDoList;