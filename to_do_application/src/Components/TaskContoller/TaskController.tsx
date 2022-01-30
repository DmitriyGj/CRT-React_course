import React, {useState,useEffect} from "react";
import { addTask,editTask } from "../../reducers/TaskReduser";
import { useDispatch } from "react-redux";
import {CustomSelect} from "../CustomSelect/CustomSelect";
import {TaskPriorityOptions, TaskPriorities} from '../../constants/TaskConstants';
import { TaskContollerProps } from "../../types/types";
import { onKeyDown, DateToString } from "../../functions/functions";
import './TaskController.css'

export const TaskController:React.FunctionComponent<TaskContollerProps> = 
function TaskController({task}:TaskContollerProps){
    const dispatch = useDispatch();
    const [title,setTitle] = useState(task? task.title: '');
    const [priority,setPriority] = useState(task? task.priority:TaskPriorities.Low);
    const [deadLine,setDeadLine] = useState(task? DateToString(task.deadLine):DateToString(new Date()));
    
    const clickOkHandler = ()=>{
        if(!title){
            alert('Название не может быть пустым');
            return;
        }
        if(!deadLine){
            alert('Укажите дедлайн');
            return ;
        }
        const action =task? editTask:addTask;
        const parsedDeadLine = new Date(Date.parse(deadLine));
        dispatch(action({id:task?.id,title:title,priority:priority,deadLine:parsedDeadLine}));
    }

    useEffect(() => {
        console.log(deadLine.toString());
        const onKeydownHandler =(e:KeyboardEvent)=> onKeyDown('Enter',clickOkHandler)(e)
        document.addEventListener('keydown',onKeydownHandler);
        return () => document.removeEventListener('keydown', onKeydownHandler);
    })

    return(
        <div className ='TaskController'>
            <div className='Task-title'>
                <label htmlFor='title-input'>Название</label>
                <input  onChange = {(e)=>setTitle(e.target.value)}
                        value = {title}
                        id ='titile-input'/>
            </div>
            <div>
                <CustomSelect title='Приоритет'
                            parentValue={priority}
                            options={TaskPriorityOptions}
                            changeValueParentHandler={setPriority}/>
            </div>
            <div>
                <label htmlFor='deadline'>Дедлайн</label>
                <input id='deadline'
                    value={deadLine}
                    onChange={(e)=>setDeadLine(e.target.value)}
                    type='date'/>
            </div>
            <div>
                <button className='Add-button'
                    onClick ={clickOkHandler}>Ок.</button>
            </div>
            
        </div>
    );
}

