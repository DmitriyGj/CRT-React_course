import React from 'react';

export type Filter = 'All' | 'Done' | 'NotDone';

export type Buffer<T>={
    [name:string]:T
}

export type TaskFilter ={
    func:(task:TTask)=>TTask | boolean
    name:string
}

export interface ICustomSelectOption{
    key:string,
    value:string,
    label:string
}

export type CustomSelectProps ={
    title:string
    options:ICustomSelectOption[]
    parentValue:string
    changeValueParentHandler(value:string):void
}

export type Priority = 'Low' | 'High' | 'Medium';

export type TaskPriority ={
    name:string
}

export type TaskCreateProps={
    title:string
    priority:string
    deadLine:Date
}

export type TTask = {
    id:string
    title: string
    done:boolean
    priority:Priority
    deadLine:Date
};

export interface ModalProps {
    visible: boolean
    title: string
    content: React.ReactElement | string
    footer: React.ReactElement | string
    onClose: () => void
}

export type TaskState ={
    tasks:TTask[]
}

export type FilterState={
    currentFilter:TaskFilter,
    FiltersBuffer:Buffer<TaskFilter>
}
export type TaskManagerStore={
    Tasks:TaskState,
    Filter:FilterState
}

export type TaskContollerProps={
    task?:TTask
}

export type LinkProps={
    to:string
    value:string
}

export type LinkRenderProps = {
    key:string
    body:LinkProps
}