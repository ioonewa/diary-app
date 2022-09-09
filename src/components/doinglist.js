import React from "react";
import Hud from "./hud"
import "../styles/doinglist.css"
import Task from "./task";

class DoingList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    name: "Extra lesson",
                    points: [
                        {
                            id: 1,
                            checked: false,
                            text: 'Use bus to go lesson place'
                        },
                        {
                            id: 2,
                            checked: false,
                            text: 'It\'s good to see it'
                        },
                        {
                            id: 3,
                            checked: false,
                            text: 'Now i finished'
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Some lessons",
                    points: [
                        {
                            id: 1,
                            checked: false,
                            text: 'I hate this error'
                        }
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <div className="flex-container">
                <Hud />
                <div className="flex-container3">
                    {this.state.tasks.map((task) => <Task key={task.id} task={task} points={task.points} />)}
                    <div className="task-add">
                        <span className="task-add-txt">Add <br/> task block</span>
                        <button className="task-add-btn">Click!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoingList