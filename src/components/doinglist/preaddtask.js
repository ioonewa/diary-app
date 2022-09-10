import React from "react";

function PreAddTask(props){
    return(
        <div className="task-add">
            <p className="task-add-txt">Add <br/> your tasks!</p>
            <button className="task-add-btn" onClick={() => props.setAdd()}>Add!</button>
        </div>
    )
}

export default PreAddTask
        