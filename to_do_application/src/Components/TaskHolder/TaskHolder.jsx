import {useContext, useCallback} from 'react'
import './TaskHolder.css'
import {TaskController} from './TaskController/TaskController';
import {Task} from '../Task/Task';
import { addLodaing } from '../../HOCs/LoaderHOC';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Selector } from '../Selector/Selector';
import { TaskFilterOptions, TaskFilter } from '../../Constants/Constants.js';
import { observer } from 'mobx-react-lite';

const TaskWithLoading = addLodaing(Task);
export const TaskHolder = observer(({tasksStore})=>{
    
    const AddTask =useCallback((task) => tasksStore.AddTask(task), [tasksStore]);
    const RemoveTask =useCallback((taskId) => tasksStore.RemoveTask(taskId), [tasksStore]);
    const ToggleDoneStatus = useCallback((taskId) => tasksStore.ToggleDoneStatus(taskId), [tasksStore]);
    const changeFilter = useCallback((filterName) => tasksStore.ChangeFilter(filterName),[tasksStore]);

    const {taskFilter,todos} = tasksStore;
    console.log(taskFilter)
    const theme = useContext(ThemeContext);

return (<div className={`TaskHolder ${theme}`}>
                    <div className='MainInfo'>
                        <h2>Управление заданиями</h2>
                            <TaskController addTaskParentHandler={AddTask}/>
                            <Selector title='Показать' 
                                            options={TaskFilterOptions}
                                            changeValueParentHandler = {changeFilter}
                                            parentValue ={taskFilter} /> 
                    </div>
                    <ul>
                        {todos.filter(taskFilter.func).map(task=><li key = {task.id}>
                                        <TaskWithLoading {...task} 
                                        removeTaskParentHandler = {RemoveTask}
                                        changeDoneTaskParentHandler = {()=>ToggleDoneStatus}/> 
                                    </li>)}
                    </ul>
                </div>
    );
})

