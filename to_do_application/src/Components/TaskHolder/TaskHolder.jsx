import React from "react";
import {useState,useContext, useCallback} from 'react'
import './TaskHolder.css'
import {TaskController} from './TaskController/TaskController';
import {Task} from '../Task/Task';
import { addLodaing } from '../../HOCs/LoaderHOC';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Selector } from '../Selector/Selector';
import { TaskFilterOptions, TaskFilter } from '../../Constants/Constants.js';

const TaskWithLoading = addLodaing(Task);

export function TaskHolder(props){

    const theme = useContext(ThemeContext);

    const [tasks,setTasks] = useState([]);
    const [taskFilterName, setTaskFilter] = useState(TaskFilter.All.name);
    

    const changeDoneTaskHandler = useCallback((taskId) =>
        {setTasks( tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask ))}
        ,[tasks]);

    const changeFilterHandler = (e) =>{
        setTaskFilter(e.target.value);
    }

    const removeTaskHandler = useCallback((taskId) => 
        {setTasks(tasks.filter(displayTask => displayTask.id !== taskId))},
        [tasks])
    
    const addTaskHandler = useCallback((task)=>
    {const unique = tasks.every(instTask => instTask.title !== task.title)
        if(!unique){
            alert('Такое задание уже существует')
            return;
        }
        setTasks( [...tasks,task ]);}
        ,[tasks])

    return (<div className={`TaskHolder ${theme}`}>
                <div className='MainInfo'>
                    <h2>Управление заданиями</h2>
                        <TaskController addTaskParentHandler = {addTaskHandler}/>
                        <Selector title='Показать' 
                                        options={TaskFilterOptions}
                                        changeValueParentHandler = {changeFilterHandler}
                                        parentValue ={taskFilterName} />
                </div>
                <ul>
                    {[...tasks].filter(TaskFilter[taskFilterName].func)
                    .map(task=><li key = {task.id}>
                                    <TaskWithLoading {...task} 
                                    removeTaskParentHandler = {removeTaskHandler}
                                    changeDoneTaskParentHandler = {changeDoneTaskHandler}/> 
                                </li>)}
                </ul>
            </div> )
}

