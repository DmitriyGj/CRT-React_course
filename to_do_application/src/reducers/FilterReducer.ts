import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../store/TaskManagerStore';
import {TaskFiltersBuffer} from '../constants/FilterConstants';
import {FilterState} from '../types/types'



const initialState:FilterState = {currentFilter:TaskFiltersBuffer.All,
                    FiltersBuffer:TaskFiltersBuffer}

export const filterSlice = createSlice({
    name:'Filter',
    initialState,
    reducers:{
        changeFilter:(state,action)=>{
            state.currentFilter = state.FiltersBuffer[action.payload];
        }
    }
});


export const {changeFilter} = filterSlice.actions;
export const getFilter = (state:RootState) => state.Filter.currentFilter;;
export default filterSlice.reducer;