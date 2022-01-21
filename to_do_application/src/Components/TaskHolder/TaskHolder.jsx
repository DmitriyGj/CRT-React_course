import {useState,useContext} from 'react'
import './TaskHolder.css'
import {TaskFilterSelector} from "./TaskFilterSelector/TaskFilterSelector";
import {TaskController} from "./TaskController/TaskController";
import {Task} from "../Task/Task";
import { addLodaing } from '../../HOCs/LoaderHOC';
import { ThemeContext } from '../../contexts/ThemeContext';
import PropTypes from 'prop-types';

const TaskWithLoading = addLodaing(Task);

export function TaskHolder(props){
    const [tasks,setTasks] = useState([]);
    const [taskFilter, setTaskFilter] = useState('(task)=>task');
    
    const theme = useContext(ThemeContext);

    const changeDoneTaskHandler = (taskId) =>{
        setTasks( tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask ))
    }

    const changeFilterHandler = (e) =>{
        setTaskFilter(e.target.value);
    }

    const removeTaskHandler = (taskId) => {
        setTasks(tasks.filter(displayTask => displayTask.id !== taskId))
    }

    const addTaskHandler = (task) => {
        const unique = tasks.every(instTask => instTask.title !== task.title)
        if(!unique){
            alert('Такое задание уже существует')
            return;
        }
        setTasks( [...tasks,task ]);
    }

    return (<div className={`TaskHolder ${theme}`}>
                <div className='MainInfo'>
                    <h2>Управление заданиями</h2>
                        <TaskController addTaskParentHandler = {addTaskHandler}/>
                        <TaskFilterSelector parentChangeFilterHandler = {changeFilterHandler}
                                            parentFilterValue ={taskFilter} />
                </div>
                <ul>
                    {[...tasks].filter(eval(taskFilter))
                    .map(task=><li key = {task.id}>
                                    <TaskWithLoading {...task} 
                                    parentRemoveTaskHandler = {removeTaskHandler}
                                    parentChangeDoneTaskHandler = {changeDoneTaskHandler}/> 
                                </li>)}
                </ul>
            </div> )
}

TaskHolder.propTypes={
    tasks: PropTypes.array,
    taskFilter: PropTypes.string,
};