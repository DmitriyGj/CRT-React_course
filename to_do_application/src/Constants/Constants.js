import uuid from "react-uuid";

export const TaskFilterOptions = [{key: uuid(),value:'All', label: 'Все' },
             {key: uuid(),value:'Completed', label:'Выполненные'},
             {key: uuid(), value:'NotCompleted', label:'Текущие'}];

export const TaskFilter ={
    All:{func:(task)=>task,name:'All'},
    Completed:{func:(task)=>task.done,name:'Completed'},
    NotCompleted:{func:(task)=>!task.done,name:'NotComplited'}
};

export const TaskPriorityOptions =[{key: uuid(),value:'Low',label:'Низкий'},
                {key: uuid(),value:'Medium', label:'Средний'},
                {key: uuid(),value:'High',label:'Высокий'}];

export const TaskPriority = {
    Low:'Low',
    Medium: 'Medium',
    High: 'High'
};


export const TaskBgColors = {High: 'HighPriorityTask', Medium:'MediumPriorityTask', Low:'LowPriorityTask'};