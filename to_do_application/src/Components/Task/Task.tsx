import React from 'react';
import { TTask } from '../../types/types';
import {useDispatch} from 'react-redux'
import { useCallback, useState } from 'react';
import { removeTask,changeDoneState } from '../../reducers/TaskReduser';
import { TaskPriorityViews } from '../../constants/TaskConstants';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { TaskController } from '../TaskContoller/TaskController';
import './Task.css';

export const Task: React.FunctionComponent<TTask>= function Task(props:TTask){

    const {id,title,done,deadLine,priority} = props;
    const dispatch = useDispatch();

    const [isOpenModal,setIsOpenModal]=useState(false);

    const removeTaskHandler = useCallback(
        (id:string)=>dispatch(removeTask(id)),
        [dispatch]);

    const changeDoneStateHandler = useCallback(
        (id:string)=>dispatch(changeDoneState(id)),
        [dispatch]);
    return(
        <ThemeContext.Consumer>{value=>
            <div className={`Task task-theme-${value}`}>
                <span className='TaskPriority'>
                    {TaskPriorityViews[priority]}
                </span>
                <div className = 'TaskTitle'>
                    <label>Название:</label>
                    <p>{title}</p>
                </div>
                <div className='TaskDate'>
                    <label>Дедлайн:</label>
                    <p>{`${deadLine.toLocaleDateString()}`}</p>
                </div>
                <div className='TaskControls'>
                    <button onClick={()=>changeDoneStateHandler(id)}>{done? '✔️':'❌'}</button>
                    <button onClick={()=>setIsOpenModal(true)}>🖊️</button>
                    <button onClick= {()=>removeTaskHandler(id)}>🗑️</button>
                </div>
                <ModalWindow visible={isOpenModal}
                    title='Редактирование задачи'
                    content={<TaskController task={props} closeModal = {()=>setIsOpenModal(false)}/>}
                    footer={<button onClick={()=>setIsOpenModal(false)}>Закрыть</button>}
                    onClose={()=>setIsOpenModal(false)}/>
            </div>}
        </ThemeContext.Consumer> 
    );
}