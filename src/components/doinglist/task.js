import React from "react";
import { AiFillEdit } from "react-icons/ai"

function Task(props){
    return(
        <div className="task">
            <header className="task-header">
                <p className="task-name">{props.task.name}</p>
                <AiFillEdit className="icon"/>
            </header>
            <main className="task-body">
                {props.points.map((point) => 
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