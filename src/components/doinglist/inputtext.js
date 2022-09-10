import React from "react";

class InputText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '< blank >',
            time: '00:00'
        }
    }

    render(){
        return(
            <div className="text-form">
                <input className="text-input" placeholder="text" onChange={(event)=> this.setState({text: event.target.value})} />
                <input className="time-input time" type="time" value={this.state.time} onChange={(event)=> this.setState({time: event.target.value})} ></input>
                <button className="add-btn" onClick={()=> this.props.getInfo(this.state)}>Add</button>
            </div>
        )
    }
}

export default InputText