import React from "react";
import "../../styles/components/addtask.css"
import Edit from "../../icons/edit-icon.png"
import InputText from "./inputtext";

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            header: 'header',
            tasks: [
                {
                    id: 1,
                    text: 'sometxt',
                    time: '12:00',
                }
            ]
        }
        this.getInfo = this.getInfo.bind(this)
    }

    getInfo(data){
        const id = this.state.tasks.length + 1
        this.setState({tasks: [...this.state.tasks, {
            id,
            text: data.text,
            time: data.time,
        }]})
    }

    render(){
        return(
            <div className="task">
                <header className="task-header">
                    <input className="header-input" value={this.state.header} onChange={(event)=> this.setState({header: event.target.value})} placeholder="header"/>
                    <img src={Edit} alt="" className="edit-icon"/>
                </header>
                <main className="task-body">
                    {this.state.tasks.map((task) => 
                        <div key={task.id}>
                            <span className="point" >{task.text}</span>
                            <span className="time" >{task.time}</span>
                        </div>
                    )}

                    <InputText getInfo={this.getInfo} />
                </main>
            </div>
        )
    }
}

export default AddTask