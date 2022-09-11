import React from "react";
import "../../styles/components/addtask.css"
import InputText from "./inputtext";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

class EditTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.task.id,
            name: this.props.task.name,
            points: this.props.task.points
        }
        this.getInfo = this.getInfo.bind(this)
    }

    getInfo(data){
        const id = this.state.points.length + 1
        this.setState({points: [...this.state.points, {
            id,
            text: data.text,
            time: data.time,
        }]})
    }

    editTask(task){
        this.props.editTask(task);
        this.props.setEditMode()
    }

    render(){
        return(
            <div className="task">
                <header className="task-header">
                    <input className="header-input" value={this.state.name} onChange={(event)=> this.setState({name: event.target.value})} placeholder="header"/>
                    <div className="icons">
                        <AiOutlineCheck className="icon" onClick={() => this.editTask(this.state)}/>
                        <AiOutlineClose className="icon" onClick={() => this.props.setEditMode()} />
                    </div>
                </header>
                <main className="task-body">
                    {this.state.points.map((point) => 
                        <div className="point-block" key={point.id}>
                            <span className="point" >{point.text}</span>
                            <span className="time" >{point.time}</span>
                        </div>
                    )}
                    <InputText getInfo={this.getInfo} />
                </main>
            </div>
        )
    }
}

export default EditTask