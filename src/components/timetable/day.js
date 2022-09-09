import React from "react";
import "../../styles/components/day.css"
import Edit from "../../icons/edit-icon.png"

function Day(props){

    return(<div className="day" style={{
        [props.day.style1]: "1px solid black",
        [props.day.style2]: "2px solid black"
    }}>
        <header className="day-header">
            <h2 className="day-name">{props.day.name}</h2>
            <img src={Edit} alt="" className="edit-icon"/>
        </header>
        <main className="day-body">
            {props.day.tasks.map((task)=><span className="doing" key={task.time}>{task.text}<p className="time">{task.time}</p></span>)}
        </main>
    </div>)
}

export default Day