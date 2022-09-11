import React from "react";
import Hud from "../hud"    
import AddTask from "./addtask";
import PreAddTask from "./preaddtask";
import "../../styles/pages/doinglist.css"
import "../../styles/components/task.css"
import TaskComp from "./taskComp";

class DoingList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addTask: false,
            tasks: [
                {
                    id: 1,
                    name: "Extra lesson",
                    points: [
                        {
                            id: 1,
                            checked: false,
                            text: 'Use bus to go lesson place',
                            time: '12:00',
                        },
                        {
                            id: 2,
                            checked: false,
                            text: 'It\'s good to see it',
                            time: '13:00'
                        },
                        {
                            id: 3,
                            checked: false,
                            text: 'Now i finished',
                            time: '14:00'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Some lessons',
                    points: [
                        {
                            id: 1,
                            checked: false,
                            text: 'I hate this error',
                            time: '00:37'
                        }
                    ]
                }
            ]
        }
        this.setTask = this.setTask.bind(this)
        this.setAdd = this.setAdd.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    setTask(task){
        const id = this.state.tasks.length;
        this.setState({tasks: [...this.state.tasks,{
                id,
                name: task.name,
                points: task.points
            }]
        })
        this.setState({addTask: !this.state.addTask})
    }
    
    deleteTask(id){
        let tasks = this.state.tasks.filter((el) => el.id != id)
        this.setState({tasks})
    }

    setAdd(){
        this.setState({addTask: !this.state.addTask})
    }

    render(){
        return(
            <div className="flex-container">
                <Hud />
                <div className="flex-container3">
                    {this.state.tasks.map((task) => <TaskComp key={task.id} task={task} points={task.points} deleteTask={this.deleteTask} />)}
                    {this.state.addTask === false ? <PreAddTask setAdd={this.setAdd}/> : <AddTask setTask={this.setTask} setAdd={this.setAdd} />}
                </div>
            </div>
        )
    }
}

export default DoingList