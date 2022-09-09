import React from "react";
import "../styles/task.css"
import Edit from "../icons/edit-icon.png"

function Task(props){
    return(<div className="task">
        <header className="task-header">
            <p className="task-name">{props.task.name}</p>
            <img src={Edit} alt="" className="edit-icon"/>
        </header>
        <main className="task-body">
            {props.points.map((point) => <span className="point" key={point.id}>{point.text}</span> )}
        </main>
    </div>)
}

export default Task