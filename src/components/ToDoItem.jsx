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
            
                    <input type="checkbox" id="_checkbox-26" name="complete" checked={props.item.isCompleted} onChange={toggleComplete} className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    
                <p className={props.item.isCompleted ? "line-through" : ""}>{props.item.todo}</p>
            </div>
            <div className="flex gap-4">
                <button onClick={onDelete} className="cursor-pointer hover:scale-90"><FaTrash size={18} /></button>
                <button onClick={onUpdate} className="cursor-pointer hover:scale-90"><FaEdit size={18} /></button>
            </div>
        </article>
    )
}

export default TodDoItem;