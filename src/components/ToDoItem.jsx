import { FaTrash,FaEdit,FaCheckCircle, FaTimesCircle } from "react-icons/fa";  

function TodDoItem(props) {
    // const [checked,setchecked]=useState(true);

    function toggleComplete() {
        props.ontoggle(props.item.id)
    }

    function onDelete() {
        props.onDelete(props.item.id)
    }

    function onUpdate() {
        props.onUpdate(props.item.id)
    }

    return (
        <article className="flex rounded-md bg-amber-600 hover:bg-amber-700 w-[90%] h-14 p-2 justify-between items-center font-extrabold text-white">
            <div className="flex gap-2 font-medium">
            
                      <button 
                    onClick={toggleComplete} 
                    className="cursor-pointer hover:scale-110 transition-transform"
                    title={props.item.isCompleted ? "Mark as incomplete" : "Mark as complete"}
                >
                    {props.item.isCompleted ? (
                        <FaCheckCircle size={22} />
                    ) : (
                        <FaTimesCircle size={22} />
                    )}
                </button>
                <p className={props.item.isCompleted ? "line-through" : ""}>{props.item.todo}</p>
            </div>
            <div className="flex gap-4">
                <button onClick={onDelete} className="cursor-pointer hover:scale-90" title="delete"><FaTrash size={18} /></button>
                <button onClick={onUpdate} className="cursor-pointer hover:scale-90" title="update"><FaEdit size={18} /></button>
            </div>
        </article>
    )
}

export default TodDoItem;