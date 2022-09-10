import React from "react";
import "../../styles/components/addtask.css"
import InputText from "./inputtext";

import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'header',
            points: [{}]
        }
        this.getInfo = this.getInfo.bind(this)
        this.sendForm = this.sendForm.bind(this)
    }

    getInfo(data){
        const id = this.state.points.length + 1
        this.setState({points: [...this.state.points, {
            id,
            text: data.text,
            time: data.time,
        }]})
    }
    sendForm(){
        this.setState({name: "header",points: [{}]})
        this.props.setTask(this.state)
    }

    render(){
        return(
            <div className="task">
                <header className="task-header">
                    <input className="header-input" value={this.state.name} onChange={(event)=> this.setState({name: event.target.value})} onClick={()=> this.setState({name: ""})} placeholder="header"/>
                    <div className="icons">
                        <AiOutlineCheck className="icon" onClick={()=> this.sendForm()} />
                        <AiOutlineClose className="icon" onClick={()=> this.props.setAdd()}/>
                    </div>
                </header>
                <main className="task-body">
                    {this.state.points.map((point) => 
                        <div key={point.id}>
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

export default AddTask