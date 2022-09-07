import React from "react";
import Hud from "./hud"
import "../styles/timetable.css"
import Day from "./day";
import Edit from "../icons/edit-icon.png"

function Timetable(){
    return(
        <div className="flex-container">
            <Hud />
            <div className="flex-container2">
                <main className="calendar">
                    <Day name={"Monday"} style={"border-bottom"} style2={"border-right"} />
                    <Day name={"Tuesday"} style={"border-bottom"} style2={"border-right"} />
                    <Day name={"Wednesday"} style={"border-bottom"} />
                    <Day name={"Thursday"} style={"border-top"} style2={"border-right"} />
                    <Day name={"Friday"} style={"border-top"} style2={"border-right"}/>
                    <Day name={"Saturday"} style={"border-top"} />
                </main>
                <aside className="mphrase">
                    <input type="checkbox"/>
                    <div className="flex-container phrase">
                        <div className="container">
                            <img className="edit-ic" src={Edit} alt="" />
                            <span>Never <br /> give up!</span>
                            {/* fixed it! */}
                        </div>
                    </div>
                </aside>
            </div>
            
        </div>
    )
}

export default Timetable