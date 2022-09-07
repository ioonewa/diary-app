import React from "react";
import "../styles/task.css"
import Edit from "../icons/edit-icon.png"

function Task(props){

    return(<div className="task">
        <header className="task-header">
            <h2 className="task-name">{props.name}</h2>
            <img src={Edit} alt="" className="edit-icon"/>
        </header>
        <main className="task-body">
            <span className="point">Studying</span>
            <span className="point">Something</span>
        </main>
    </div>)
}

export default Task