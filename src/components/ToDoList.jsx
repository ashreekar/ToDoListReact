import TodDoItem from "./ToDoItem";

function ToDoList(props){
    // props-->[{id:,todo:,isCompleted}]
    return (
        <section>
            {
                props.todos.map(item=>{
                    return <TodDoItem key={item.id} item={item} />
                })
            }
        </section>
    )
}

export default ToDoList;