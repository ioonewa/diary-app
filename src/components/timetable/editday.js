import React from "react";
import "../../styles/components/editDay.css"
import InputDay from "./inputday";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

class EditTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.day.name,
            tasks: this.props.day.tasks,
            style1: this.props.day.style1,
            style2: this.props.day.style2
        }
        this.getInfo = this.getInfo.bind(this)
        this.editDay = this.editDay.bind(this)
    }

    getInfo(data){
        const id = this.state.tasks.length + 1
        this.setState({tasks: [...this.state.tasks, {
            id,
            text: data.text,
            time: data.time,
        }]})
    }

    editDay(day){
        this.props.editDay(day)
        this.props.setEditMode()
    }

    render(){
        return(
            <div className="day" style={{
                [this.state.style1]: "1px solid black",
                [this.state.style2]: "2px solid black"
             }}>
                <header className="day-header">
                    <h2 className="day-name">{this.props.day.name}</h2>
                    <div className="icons">
                        <AiOutlineCheck className="icon" onClick={() => this.editDay(this.state)}/>
                        <AiOutlineClose className="icon" onClick={() => this.props.setEditMode()} />
                    </div>
                </header>
                <main className="day-body">
                    {this.state.tasks.map((task) => 
                        <span className="point" key={task.time}>{task.text}<span className="time">{task.time}</span></span>
                    )}
                    <InputDay getInfo={this.getInfo} />
                </main>
            </div>
        )
    }
}

export default EditTask