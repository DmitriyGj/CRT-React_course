import {PrioritySelector} from "../PrioritySelector/PrioritySelector";
import {useState, useContext} from "react";
import uuid from "react-uuid";
import { ThemeContext} from '../../../contexts/ThemeContext';
import './TaskContoller.css';
import PropTypes from 'prop-types';

export function TaskController(props){

    const [taskTitle, setTaskTitle] = useState('');
    const [taskPriority, setTaskPriority] = useState('Low')
    const [deadline, setDeadline] = useState(Date.now())

    const theme = useContext(ThemeContext);

    const changeTaskPriorityHandler = (e) =>{
        setTaskPriority(e.target.value);
    };

    const deadlineChangeHandler = (e)=> {
        setDeadline(Date.parse(e.target.value));
    };

    const addTaskHandler = () =>{
        if(!taskTitle){
            alert('Название не может быть пустым')
            return;
        }

        props.addTaskParentHandler({id:uuid(),
            done:false,
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
                    <input className={theme+'ControllerInput'} 
                            type = 'text' 
                            value={taskTitle}
                            onChange={changeTaskTitleHandler} />
                </div>
                <div>
                    <label>Дедлайн:</label>
                    <input type='date' min = {Date.now()} onChange={deadlineChangeHandler} 
                    value={`${deadline.getYear()}-${deadline.getMonth()}-${deadline.getDate()}`}>
                    </input>
                </div>
               
                <PrioritySelector parentValue ={taskPriority}
                            parentChangePriorityHandler = {changeTaskPriorityHandler}/>
                <button className={theme+'ControllerBtn'} onClick={addTaskHandler}>Добавить</button>
            </div>);
}

TaskController.propTypes ={
    taskTitle: PropTypes.string,
    taskPriority: PropTypes.string
};

