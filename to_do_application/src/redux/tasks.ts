import { createSlice } from "@reduxjs/toolkit";
import { ISelectorOption, ITaskFilter, TaskFilter, TaskFilterOptions } from "../Constants/Constants";
import { Task } from "../Components/Task/TaskModel";
import {RootState} from './store';

type initialState ={
    tasks:Task[],
    taskFilter:ITaskFilter,
    TaskFilterOptions:ISelectorOption[]
}

const initialState:initialState = {tasks:[],
                taskFilter:TaskFilter.All,
                TaskFilterOptions:TaskFilterOptions,
            };

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            if(state.tasks.some(initTask=> initTask.title === action.payload.title)){
                alert('Такое задание уже существует');
                return state;
            }
            state.tasks.push(action.payload);
        },
        removeTask:(state,action)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.filter(initTask=> initTask.id !== taskId);
        },
        changeDoneState:(state,action)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask );
        },
        setFilter:(state,action)=>{
            state.taskFilter = TaskFilter[action.payload];
        },
    }
});



export const {addTask, removeTask, changeDoneState,setFilter} = tasksSlice.actions;
export default tasksSlice.reducer;
export const getTasks = (state:RootState)=>state.tasks;