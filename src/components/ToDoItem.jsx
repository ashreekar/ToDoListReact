import { FaTrash,FaEdit,FaCheckCircle, FaTimesCircle } from "react-icons/fa";  
// Importing icons to reneder each comps

// props-> {item,ontoggle,onDleete,onUpdate}

// item -> {id:any_id, todo:any_todo, isCompleted:bool}
function TodDoItem(props) {
    // const [checked,setchecked]=useState(true);

    // calls ontoggle function App.jsx to toggle completion
    function toggleComplete() {
        props.ontoggle(props.item.id)
    }

    //calls onDelete function App.jsx to delete from todos array
    function onDelete() {
        props.onDelete(props.item.id)
    }

    //calls onUpdate function App.jsx to update from todos array
    function onUpdate() {
        props.onUpdate(props.item.id)
    }

    return (
        <article className="flex rounded-md bg-white hover:bg-amber-100 w-[90%] h-14 p-2 justify-between items-center font-extrabold text-black">
            <div className="flex gap-2 font-medium">
            {/* On clicking the button it will toggle completiong by calling function */}
                      <button 
                    onClick={toggleComplete} 
                    className="cursor-pointer hover:scale-110 transition-transform"
                    title={props.item.isCompleted ? "Mark as incomplete" : "Mark as complete"}
                >
                    {/* if it is completed as by item object then shows green mark else red mark */}
                    {props.item.isCompleted ? (
                        <FaCheckCircle size={22} className="text-green-500"/>
                    ) : (
                        <FaTimesCircle size={22} className="text-red-500" />
                    )}
                </button>
                {/* Adds line through in the text shown if completed */}
                <p className={props.item.isCompleted ? "line-through" : ""}>{props.item.todo}</p>
            </div>
            <div className="flex gap-4">
                {/* Button for deletion and updation */}
                <button onClick={onDelete} className="cursor-pointer hover:scale-90" title="delete"><FaTrash size={18} className="text-amber-500" /></button>
                <button onClick={onUpdate} className="cursor-pointer hover:scale-90" title="update"><FaEdit size={18} className="text-amber-500" /></button>
            </div>
        </article>
    )
}

export default TodDoItem;