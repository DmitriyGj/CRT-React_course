import {Component} from 'react'
import './TaskHolder.css'
import { Selector } from '../Selector/Selector';
import {TaskFilterOptions , TaskFilterFunctions} from '../../Constants/Constants';
import {TaskController} from "./TaskController/TaskController";
import {Task} from "../Task/Task";

class TaskHolder extends  Component{
    constructor(props) {
        super(props);
        this.state ={
            tasks:[ ],
            taskFilterName:'All'
        };

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        this.changeFilterHandler = this.changeFilterHandler.bind(this);
        this.changeDoneTaskHandler = this.changeDoneTaskHandler.bind(this);
    }

    changeDoneTaskHandler(taskId){
        this.setState(prevState=>{
            return {tasks: prevState.tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask)}
        });
    }

    changeFilterHandler(e){
        this.setState({taskFilterName:e.target.value});
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
        const {tasks,taskFilterName} = this.state;
        return <div className='TaskHolder'>
                    <div className='MainInfo'>
                        <h2>Управление заданиями</h2>
                        <TaskController addTaskParentHandler = {this.addTaskHandler}/>
                        <Selector title='Показать' 
                                        options={TaskFilterOptions}
                                        changeValueParentHandler = {this.changeFilterHandler}
                                        parentValue ={this.state.taskFilterName} />
                    </div>
                    <ul>
                        {[...tasks].filter(TaskFilterFunctions[taskFilterName]).map(task=><li key = {task.id}>
                                                                                                <Task {...task}
                                                                                                changeDoneTaskParentHandler = {this.changeDoneTaskHandler}
                                                                                                removeTaskParentHandler = {this.removeTaskHandler}/> 
                                                                                            </li>)}
                    </ul>
               </div>
    }
}

export {TaskHolder}