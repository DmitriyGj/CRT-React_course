import {useState, useContext} from "react";
import { ThemeContext} from '../../../contexts/ThemeContext';
import './TaskContoller.css';
import { Selector } from "../../Selector/Selector";
import { TaskPriority,TaskPriorityOptions } from "../../../Constants/Constants";

export function TaskController(props){

    const [taskTitle, setTaskTitle] = useState('');
    const [taskPriority, setTaskPriority] = useState('Low')

    const theme = useContext(ThemeContext);

    const changeTaskPriorityHandler =(priorityName)=> {
        setTaskPriority(TaskPriority[priorityName]);
    };

    const addTaskHandler = () =>{
        if(!taskTitle){
            alert('Название не может быть пустым')
            return;
        }

        props.addTaskParentHandler({done:false,
            priority:taskPriority,
            title :taskTitle});
            
        setTaskTitle('');
        setTaskPriority('Low');    
    }

    const changeTaskTitleHandler = (e) => {
        setTaskTitle(e.target.value);
    }

    return( <div className={`TaskController ${theme}Controller`}>
                <div>
                    <label> Заголовок</label>
                    <input className={`${theme}ControllerInput`} 
                            type = 'text' 
                            value={taskTitle}
                            onChange={changeTaskTitleHandler} />
                </div>
               
                <Selector title='Приоритет'
                                options ={TaskPriorityOptions}
                                parentValue ={taskPriority}
                                changeValueParentHandler = {changeTaskPriorityHandler}/>
                <button className={`${theme}ControllerBtn`} 
                        onClick={addTaskHandler}>Добавить</button>
            </div>);
}



