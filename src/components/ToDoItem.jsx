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
        <article className="flex rounded-md bg-white hover:bg-amber-100 w-[90%] h-14 p-2 justify-between items-center font-extrabold text-black">
            <div className="flex gap-2 font-medium">
            
                      <button 
                    onClick={toggleComplete} 
                    className="cursor-pointer hover:scale-110 transition-transform"
                    title={props.item.isCompleted ? "Mark as incomplete" : "Mark as complete"}
                >
                    {props.item.isCompleted ? (
                        <FaCheckCircle size={22} className="text-green-500"/>
                    ) : (
                        <FaTimesCircle size={22} className="text-red-500" />
                    )}
                </button>
                <p className={props.item.isCompleted ? "line-through" : ""}>{props.item.todo}</p>
            </div>
            <div className="flex gap-4">
                <button onClick={onDelete} className="cursor-pointer hover:scale-90" title="delete"><FaTrash size={18} className="text-amber-500" /></button>
                <button onClick={onUpdate} className="cursor-pointer hover:scale-90" title="update"><FaEdit size={18} className="text-amber-500" /></button>
            </div>
        </article>
    )
}

export default TodDoItem;