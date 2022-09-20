import React from "react";
import EditDay from "./editday";
import Day from "./day";

class DayComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editMode: false,
            day: this.props.day,
        }

        this.setEditMode = this.setEditMode.bind(this)
        this.editDay = this.editDay.bind(this)
    }

    setEditMode(){
        this.setState({editMode : !this.state.editMode})
    }

    editDay(day){
        this.setState({day})
    }
    
    render(){
        return(
            <div>
                {this.state.editMode === false ? <Day day={this.state.day} setEditMode={this.setEditMode} /> // deleteTask={this.props.deleteTask}
                : <EditDay day={this.state.day} setEditMode={this.setEditMode} editDay={this.editDay} />} 
            </div>
        )
    }
}

export default DayComp