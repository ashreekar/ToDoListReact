import { useState } from "react";

function TodDoItem(props){
    const [checked,setchecked]=useState(true);
    
    function toggleComplete(){
        setchecked(!checked)
    }

    return (
        <article>
            <input type="checkbox" name="complete" id="complete" checked={props.item.isCompleted} onChange={toggleComplete} />
            <p className={props.item.isCompleted?"line-through":""}>{props.item.todo}</p>
            <div>
                <button>Delete</button>
                <button>Update</button>
            </div>
        </article>
    )
}

export default TodDoItem;