import React from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai"

function Task(props){
    return(
        <div className="task">
            <header className="task-header">
                <p className="task-name">{props.task.name}</p>
                <div className="icons">
                    <AiFillEdit className="icon" onClick={() => props.setEditMode()} />
                    <AiTwotoneDelete className="icon" onClick={() => props.deleteTask(props.task.id)} />
                </div> 
                
            </header>
            <main className="task-body">
                {props.task.points.map((point) => 
                    <div className="point-block" key={point.id+100}>
                        <span className="point">{point.text}</span>
                        <span className="time">{point.time}</span>
                    </div> 
                )}
            </main>
        </div>
    )
}

export default Task