import React from "react";
import {useContext, useCallback} from 'react'
import './TaskHolder.css'
import {TaskController} from './TaskController/TaskController';
import {Task} from '../Task/Task';
import { addLodaing } from '../../HOCs/LoaderHOC';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Selector } from '../Selector/Selector';
import { useDispatch,useSelector } from 'react-redux';
import {addTask,removeTask,changeDoneState,setFilter,clearFailure} from '../../redux/tasks'

const TaskWithLoading = addLodaing(Task);

export function TaskHolder(){

    const theme = useContext(ThemeContext);

    const {tasks,taskFilter,TaskFilterOptions,failure,clearFailure} = useSelector((state)=>state.tasks);
    const dispatch = useDispatch();

    const changeFilterHandler = useCallback((e) => dispatch(setFilter(e.target.value)),[dispatch])

    const changeDoneTaskHandler = useCallback(taskId =>dispatch(changeDoneState(taskId)),[dispatch]);

    const removeTaskHandler = useCallback(taskId => dispatch(removeTask(taskId)),[dispatch]);
    
    const addTaskHandler = useCallback(task=>dispatch(addTask(task)),[dispatch])


    return (<div className={`TaskHolder ${theme}`}>
                <div className='MainInfo'>
                    <h2>Управление заданиями</h2>
                        <TaskController addTaskParentHandler = {addTaskHandler}/>
                        <Selector title='Показать' 
                                options={TaskFilterOptions}
                                changeValueParentHandler = {changeFilterHandler}
                                parentValue ={taskFilter.name} /> 
                </div>
                <ul>
                    {[...tasks].filter(taskFilter.func).map(task=><li key = {task.id}>
                                <TaskWithLoading {...task} 
                                removeTaskParentHandler = {removeTaskHandler}
                                changeDoneTaskParentHandler = {changeDoneTaskHandler}/> 
                            </li>)}
                </ul>
            </div> )
}

