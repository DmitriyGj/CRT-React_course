import React from 'react';
import { Provider } from 'react-redux';
import { TaskManagerStore } from '../../store/TaskManagerStore';
import {TaskManager} from '../../Components/TaskManager/TaskManager';

export const TaskManagerPage = function TaskManagerPage(){
    return (
        <Provider store={TaskManagerStore}>
            <TaskManager/>
        </Provider>
    )
}