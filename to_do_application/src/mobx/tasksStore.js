import { TaskFilter } from '../Constants/Constants';
import { makeObservable,observable,  action } from 'mobx';
import uuid from 'react-uuid';

class TaskStore{
    todos = []
    taskFilter = TaskFilter.All

    constructor(){
        makeObservable(this,{
            taskFilter:observable,
            todos:observable,
            AddTask:action,
            RemoveTask:action,
            ChangeFilter:action,
            ToggleDoneStatus:action
        });
    }

    AddTask(task){
        if(this.todos.some(task=>task.title === task.title)){
            alert('Такое задание уже существует');
            return;
        }
        this.todos = [...this.todos,{...task,id:uuid()}];
    }

    RemoveTask(taskId){
        this.todos = this.todos.filter(task=>task.id !== taskId) 
    }

    ToggleDoneStatus(taskId){
        this.todos= this.todos.map(initTask => initTask.id === taskId ? {...initTask,done:!initTask.done}:initTask );
    }

    ChangeFilter(filterName){
        this.taskFilter = TaskFilter[filterName];
    }
}

export default  new TaskStore();