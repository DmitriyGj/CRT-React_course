import React from "react";
import {useState, useContext} from "react";
import {v4 as uuid} from "uuid";
import { ThemeContext} from '../../../contexts/ThemeContext';
import './TaskContoller.css';
import { Selector } from '../../Selector/Selector';
import { TaskPriority,TaskPriorityOptions } from "../../../Constants/Constants";
import { TaskContollerProps } from "./TaskControllerModel";

export function TaskController(props:TaskContollerProps){

    const [taskTitle, setTaskTitle] = useState<string>('');
    const [taskPriority, setTaskPriority] = useState<string>(TaskPriority.Low)

    const theme = useContext(ThemeContext);

    const changeTaskPriorityHandler = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
        setTaskPriority(TaskPriority[e.target.value]);
    };

    const addTaskHandler = () =>{
        if(!taskTitle){
            alert('Название не может быть пустым')
            return;
        }

        props.addTaskParentHandler({id:uuid(),
            done:false,
            priority:taskPriority,
            title :taskTitle});
            
        setTaskTitle('');
        setTaskPriority('Low');    
    }

    const changeTaskTitleHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setTaskTitle(e.target.value);
    }

    return( <div className={`TaskController ${theme}Controller`}>
                <div>
                    <label> Заголовок</label>
                    <input className={`${theme}ControllerInput`} 
                            type = 'text' 
                            value={taskTitle}
                            onChange={changeTaskTitleHandler} />
                </div>
               
                <Selector title='Приоритет'
                                options ={TaskPriorityOptions}
                                parentValue ={taskPriority}
                                changeValueParentHandler = {changeTaskPriorityHandler}/>
                <button className={`${theme}ControllerBtn`} 
                        onClick={addTaskHandler}>Добавить</button>
            </div>);
}



