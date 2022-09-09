import React from "react";
import "../../styles/components/task.css"
import Edit from "../../icons/edit-icon.png"

function Task(props){
    return(
        <div className="task">
            <header className="task-header">
                <p className="task-name">{props.task.name}</p>
                <img src={Edit} alt="" className="edit-icon"/>
            </header>
            <main className="task-body">
                {props.points.map((point) => 
                    <div className="point-block" key={point.id}>
                        <span className="point">{point.text}</span>
                        <span className="time">{point.time}</span>
                    </div> 
                )}
            </main>
        </div>
    )
}

export default Task