import React from "react";
import Hud from "./hud"
import "../styles/doinglist.css"
import Task from "./task";

function DoingList(){
    return(
        <div className="flex-container">
            <Hud />
            <div className="flex-container3">
                <Task name={"Name"} />
                <div className="task-add">
                    <span className="task-add-txt">Add <br/> task block</span>
                    <button className="task-add-btn">Click!</button>
                </div>
            </div>
        </div>
    )
}

export default DoingList