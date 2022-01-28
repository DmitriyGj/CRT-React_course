export type Task = {
    id:string;
    title:string;
    done:boolean;
    priority:string;
}

export interface TaskProps{
    id:string;
    title:string;
    priority:string; 
    done:boolean;
    changeDoneTaskParentHandler(taskId:string|undefined):void;
    removeTaskParentHandler(taskId:string|undefined):void;
};