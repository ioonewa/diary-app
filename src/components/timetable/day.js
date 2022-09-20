import React from "react";
import "../../styles/components/day.css"
import {AiFillEdit} from "react-icons/ai"

function Day(props){

    return(
        <div className="day" style={{
            [props.day.style1]: "1px solid black",
            [props.day.style2]: "2px solid black"
        }}>
            <header className="day-header">
                <h2 className="day-name">{props.day.name}</h2>
                <AiFillEdit className="icon" onClick={()=> props.setEditMode()}/>
            </header>
            <main className="day-body">
                {props.day.tasks.map((task)=>
                <span className="point" key={task.time}>{task.text}<span className="time">{task.time}</span></span>
                )}
            </main>
        </div>
    )
}

export default Day