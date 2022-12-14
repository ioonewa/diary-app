import React from "react";
import Hud from "../hud"
import "../../styles/pages/timetable.css"
import DayComp from "./daycomp"

class Timetable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            days: [
                {
                    name: "Monday",
                    style1: "borderBottom",
                    style2: "borderRight",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "12:00"
                        },
                    ]   
                },
                {
                    name: "Tuesday",
                    style1: "borderBottom",
                    style2: "borderRight",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "13:00"
                        },
                    ] 
                },
                {
                    name: "Wednesday",
                    style1: "borderBottom",
                    style2: "",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "14:00"
                        },
                    ] 
                },
                {
                    name: "Thursday",
                    style1: "borderTop",
                    style2: "borderRight",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "15:00"
                        },
                    ] 
                },
                {
                    name: "Friday",
                    style1: "borderTop",
                    style2: "borderRight",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "16:00"
                        },
                    ] 
                },
                {
                    name: "Saturday",
                    style1: "borderTop",
                    style2: "",
                    tasks: [
                        {
                            text: "Clean room",
                            time: "17:00"
                        },
                    ] 
                },
            ]
        }
    }

    render(){
        return(
            <div className="flex-container">
                <Hud />
                <div className="flex-container2">
                    <div className="calendar">
                        {this.state.days.map((day) => <DayComp key={day.name} day={day} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Timetable