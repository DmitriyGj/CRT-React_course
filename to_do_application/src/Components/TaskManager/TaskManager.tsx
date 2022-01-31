import React, { useState,useCallback } from 'react';
import {TaskList} from '../TaskList/TaskList';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import { TaskController } from '../TaskContoller/TaskController';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { TaskFilterOptions } from '../../constants/FilterConstants';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { changeFilter,getFilter } from '../../reducers/FilterReducer';
import { TaskManagerStore } from '../../store/TaskManagerStore';

export const TaskManager:React.FunctionComponent = function TaskManager(){
    const [isOpenModal,setIsOpenModal]=useState(false);
    const dispatch =useDispatch();
    const filter = useSelector(getFilter);
    const changeFilterHandler = useCallback((value:string)=>dispatch(changeFilter(value)),
                                [dispatch]);
    return(
        <Provider store={TaskManagerStore}>
            <div className='TaskManager'>
                <div className='TaskManger-header'>
                    <CustomSelect title='Показать'
                                parentValue={filter.name}
                                changeValueParentHandler={changeFilterHandler}
                                options={TaskFilterOptions}/>
                    <button onClick={()=>setIsOpenModal(true)}>Добавить задачу</button>
                </div>
                <TaskList></TaskList>
                <ModalWindow visible={isOpenModal}
                    title='Добавление задачи'
                    content={<TaskController closeModal = {()=>setIsOpenModal(false)}/>}
                    footer={<button onClick={()=>setIsOpenModal(false)}>Закрыть</button>}
                    onClose={()=>setIsOpenModal(false)}/>
            </div>
        </Provider>
    )
}

