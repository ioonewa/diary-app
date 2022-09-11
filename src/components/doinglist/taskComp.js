import React from "react";
import EditTask from "./edittask";
import Task from "./task";

class TaskComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editMode: false,
            task: this.props.task,
        }

        this.setEditMode = this.setEditMode.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    setEditMode(){
        this.setState({editMode : !this.state.editMode})
    }

    editTask(task){
        this.setState({task})
    }
    
    render(){
        return(
            <div>
                {this.state.editMode === false ? <Task task={this.state.task} setEditMode={this.setEditMode} deleteTask={this.props.deleteTask} /> 
                : <EditTask task={this.state.task} setEditMode={this.setEditMode} editTask={this.editTask} />}
            </div>
        )
    }
}

export default TaskComp