import React from "react";

class InputText extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: 'text',
            time: '01:16'
        }
    }

    render(){
        return(
            <div className="text-form">
                <input className="text-input" placeholder="text" onChange={(event)=> this.setState({text: event.target.value})} />
                <input className="time-input time" placeholder="00:00" onChange={(event)=> this.setState({time: event.target.value})} />
                <button className="add-btn" onClick={()=> this.props.getInfo(this.state)}>Add</button>
            </div>
        )
    }
}

export default InputText