import React from "react";
import { useSelector } from "react-redux";
import {Todo} from "../Task/Task";
import {getTasks} from '../../reducers/TaskReduser';
import './TaskList.css'

export const TaskList: React.FunctionComponent = function TodoList() {
    const tasks = useSelector(getTasks); 
    return(
        <div className='TaskList'>
            <div>
                <h1>Список задач</h1>
            </div>
           { tasks.map(task=> <Todo key={task.id} {...task}/>)}
        </div>
    );
}