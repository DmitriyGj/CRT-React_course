import { configureStore } from '@reduxjs/toolkit';
import  tasksReducer  from '../reducers/TaskReduser';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import filterReducer from '../reducers/FilterReducer';

export const TaskManagerStore = configureStore({
    reducer:{
        Tasks: tasksReducer,
        Filter: filterReducer
    },
    middleware:getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof TaskManagerStore.getState>;
export type AppDispatch = typeof TaskManagerStore.dispatch;