import {Component} from 'react'
import './TaskHolder.css'
import {TaskFilterSelector} from "./TaskFilterSelector/TaskFilterSelector";
import {TaskController} from "./TaskController/TaskController";
import {Task} from "../Task/Task";

class TaskHolder extends  Component{
    constructor(props) {
        super(props);
        this.state ={
            tasks:[ ],
            taskFilter:'(task)=>task'
        };

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        this.changeFilterHandler = this.changeFilterHandler.bind(this);
        this.changeDoneTaskHandler = this.changeDoneTaskHandler.bind(this);
    }

    changeDoneTaskHandler(task){
        this.setState(state=>{
            const copy = this.state.tasks;
            const index = copy.findIndex(displayTask=>displayTask.id === task.props.id);
            copy[index].done = !task.props.done;
            return copy;
        })
    }

    changeFilterHandler(e){
        this.setState({taskFilter:e.target.value});
    }

    removeTaskHandler(task) {
        this.setState({tasks: this.state.tasks.filter(displayTask => displayTask.id !== task.props.id)})
    }

    addTaskHandler(task){
        const unique = this.state.tasks.every(instTask => instTask.title !== task.title)
        if(unique){
            this.setState({tasks:[...this.state.tasks,task ]});
        }
        else{
            alert('Такое задание уже существует')
        }
    }

    render() {
        return <div className='TaskHolder'>
                    <div className='MainInfo'>
                        <h2>Управление заданиями</h2>
                        <TaskController parent = {this}/>
                        <TaskFilterSelector parentChangeFilterHandler = {this.changeFilterHandler}
                                                parentFilterValue ={this.state.taskFilter} />
                    </div>
                    <ul>
                        {  [...this.state.tasks].filter(eval(this.state.taskFilter)).
                        map(task=><li key = {task.id}><Task id={task.id}
                                                            title = {task.title}
                                                            done={task.done}
                                                            priority ={task.priority}
                                                            parentRemoveTaskHandler={this.removeTaskHandler}
                                                            changeDoneTaskParentHandler={this.changeDoneTaskHandler}/>
                        </li>)}
                    </ul>
               </div>
    }
}

export {TaskHolder}