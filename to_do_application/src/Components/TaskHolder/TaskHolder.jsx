import {Component} from 'react'
import './TaskHolder.css'
import {TaskFilterSelector} from "./TaskFilterSelector/TaskFilterSelector";
import {TaskController} from "./TaskController/TaskController";
import {Task} from "../Task/Task";
import { addLodaing } from '../../HOCs/LoaderHOC';
import { ThemeContext } from '../../contexts/ThemeContext';
import PropTypes from 'prop-types';

const TaskWithLoading = addLodaing(Task);

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

    changeDoneTaskHandler(taskId){
        this.setState({tasks: this.state.tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask )})
    }

    changeFilterHandler(e){
        this.setState({taskFilter:e.target.value});
    }

    removeTaskHandler(taskId) {
        this.setState({tasks: this.state.tasks.filter(displayTask => displayTask.id !== taskId)})
    }

    addTaskHandler(task){
        const unique = this.state.tasks.every(instTask => instTask.title !== task.title)
        if(!unique){
            alert('Такое задание уже существует')
            return;
        }
        this.setState((prevState)=>{return {tasks:[...prevState.tasks,task ]}});
    }

    render() {
        return <ThemeContext.Consumer>{value =>
                            <div className={`TaskHolder ${value}`}>
                                <div className='MainInfo'>
                                    <h2>Управление заданиями</h2>
                                        <TaskController parent = {this}/>
                                        <TaskFilterSelector parentChangeFilterHandler = {this.changeFilterHandler}
                                                            parentFilterValue ={this.state.taskFilter} />
                                </div>
                                <ul>
                                    {[...this.state.tasks].filter(eval(this.state.taskFilter)).map(task=><li key = {task.id}>
                                                                                                            <TaskWithLoading {...task} 
                                                                                                            parentRemoveTaskHandler = {this.removeTaskHandler}
                                                                                                            parentChangeDoneTaskHandler = {this.changeDoneTaskHandler}/> 
                                                                                                        </li>)}
                                </ul>
                            </div> } 
                </ThemeContext.Consumer>
    }
}
export {TaskHolder}
