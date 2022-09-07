import React from "react";
import "../styles/day.css"
import Edit from "../icons/edit-icon.png"

function Day(props){

    return(<div className="day" style={{
        [props.style]: "1px solid black",
        [props.style2]: "2px solid black"
    }}>
        <header className="day-header">
            <h2 className="day-name">{props.name}</h2>
            <img src={Edit} alt="" className="edit-icon"/>
        </header>
        <main className="day-body">
            <span className="doing">Studying<p className="time">12:00</p></span>
            <span className="doing">Something<p className="time">15:00</p></span>
        </main>
    </div>)
}

export default Day