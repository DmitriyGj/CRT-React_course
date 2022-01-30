import React, { useState,useCallback } from 'react';
import { TaskList } from '../../components/TaskList/TaskList';
import {Modal} from '../../components/ModalWindow/ModalWindow';
import { TaskController } from '../../components/TaskContoller/TaskController';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
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
                <Modal visible={isOpenModal}
                    title='Добавление задачи'
                    content={<TaskController/>}
                    footer={<button onClick={()=>setIsOpenModal(false)}>Закрыть</button>}
                    onClose={()=>setIsOpenModal(false)}/>
            </div>
        </Provider>
    )
}

