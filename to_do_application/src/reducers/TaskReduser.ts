import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../store/TaskManagerStore';
import {v4 as uuid} from 'uuid'
import {TaskState} from '../types/types';

const initialState:TaskState = {tasks:[] };

export const tasksSlice = createSlice({
    name:'Tasks',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            if(state.tasks.some(initTask=> initTask.title === action.payload.title)){
                alert('Такое задание уже существует');
                return state;
            }
            if(Date.parse(action.payload.deadLine)<Date.now())
            {
                alert('Дата не может быть ментше текущей');
                return state;
            }
            state.tasks.push({...action.payload, id:uuid(),done:false});
        },
        removeTask:(state,action)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.filter(initTask=> initTask.id !== taskId);
        },
        changeDoneState:(state,action)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask );
        },
        editTask:(state,action)=>{
            const {id,...rest} = action.payload;
            const indexOfTask = state.tasks.findIndex(task=>task.id === id);
            state.tasks[indexOfTask] = {id:id,...rest};
        }
    }
});


export const {addTask, removeTask, changeDoneState,editTask} = tasksSlice.actions;
export const getTasks = (state:RootState)=>{
    const {Filter,Tasks} = state;
    return Tasks.tasks.filter(Filter.currentFilter.func);
}
export default tasksSlice.reducer;
