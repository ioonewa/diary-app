import React from "react";
import Hud from "../hud"
import "../../styles/pages/timetable.css"
import Day from "./day";

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
        this.editDay = this.editDay.bind(this);
    }

    editDay(){
        
    }

    render(){
        return(
            <div className="flex-container">
                <Hud />
                <div className="flex-container2">
                    <main className="calendar">
                        {this.state.days.map((day) => <Day day={day} key={day.name} />)}
                    </main>
                    {/* {this.props.mphrase === true ? <Mphrase setMphrase={this.props.setMphrase} mphrase={this.props.mphrase} /> : <Mphraseoff />} */}
                </div>
            </div>
        )
    }
}

export default Timetable