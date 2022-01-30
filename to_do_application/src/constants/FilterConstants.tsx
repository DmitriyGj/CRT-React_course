import { Buffer,TaskFilter, ICustomSelectOption } from "../types/types";
import {v4 as uuid} from "uuid";

export const TaskFiltersBuffer:Buffer<TaskFilter>={
    All:{func:(task)=>task,name:'All'},
    Done:{func:(task)=>task.done,name:'Done'},
    NotDone:{func:(task)=>!task.done,name:'NotDone'}};

export const TaskFilterOptions:ICustomSelectOption[]=[
    {key:uuid(), value:TaskFiltersBuffer.All.name, label:'Все'},
    {key:uuid(),value:TaskFiltersBuffer.Done.name, label:'Выполенные'},
    {key:uuid(),value:TaskFiltersBuffer.NotDone.name,label:'Текущие'}];