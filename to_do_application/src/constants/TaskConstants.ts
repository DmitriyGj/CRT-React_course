import { ICustomSelectOption} from '../types/types';
import {v4 as uuid} from 'uuid';


export const TaskPriorities={
    Low:'Low',
    Medium:'Medium',
    High:'High'
};

export const TaskPriorityOptions:ICustomSelectOption[]=[
    {key:uuid(), value:TaskPriorities.Low, label:'Низкий'},
    {key:uuid(),value:TaskPriorities.Medium, label:'Средний'},
    {key:uuid(),value:TaskPriorities.High, label:'Высокий'}];


export const TaskPriorityViews= {
    [TaskPriorities.Low]:'❗️',
    [TaskPriorities.Medium]:'❗️❗️',
    [TaskPriorities.High]:'❗️❗️❗️'};