import {v4 as uuid} from "uuid";
import { Task } from "../Components/Task/TaskModel";

export interface ISelectorOption{
    key:string;
    value:string;
    label:string;
};

export const TaskFilterOptions:ISelectorOption[] = [{key: uuid(),value:'All', label: 'Все' },
                                                        {key: uuid(),value:'Completed', label:'Выполненные'},
                                                        {key: uuid(), value:'NotCompleted', label:'Текущие'}];

export interface ITaskFilter{
    func:(task:Task)=>Task | boolean;
    name:string
}

export type Filter<T> ={
    All:T,
    Completed:T,
    NotCompleted:T

    [name:string]:T
}
export const TaskFilter:Filter<ITaskFilter>={
    All:{func:(task:Task)=>task,name:'All'},
    Completed:{func:(task:Task)=>task.done,name:'Completed'},
    NotCompleted:{func:(task:Task)=>!task.done,name:'NotCompleted'}
};

export const TaskPriorityOptions:ISelectorOption[] =[{key: uuid(),value:'Low',label:'Низкий'},
                {key: uuid(),value:'Medium', label:'Средний'},
                {key: uuid(),value:'High',label:'Высокий'}];

                
export type TaskPriorityProps = {
    Low:string;
    Medium:string;
    High:string;

    [name:string]:string
}

export const TaskPriority:TaskPriorityProps = { Low:'Low', Medium: 'Medium',High: 'High'};
export const TaskBgColors:TaskPriorityProps = {High: 'HighPriorityTask', Medium:'MediumPriorityTask', Low:'LowPriorityTask'};