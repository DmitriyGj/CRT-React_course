import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import PropTypes from 'prop-types';
import './Task.css'

export function Task(props) {
    const theme = useContext(ThemeContext);

    const defineBackgroundColor =()=>{
        switch (props.priority){
            case 'High':{
                return 'HighPriorityTask';  
            }
            case 'Medium':{
                return 'MediumPriorityTask';
            }
            case 'Low':{
                return  'LowPriorityTask';
            }
            default: {
                return '';
            }
        }
    }


    return (<div className={`Task ${theme + defineBackgroundColor()}`}>
                    <div className='TaskHeader '>
                        <p>{props.title}</p>
                        <button className={'TaskBtn'} onClick={()=>props.parentRemoveTaskHandler(props.id)}>Удалить</button>
                    </div>
                    <div>
                        <div className='CompleteBlock'>
                            <label htmlFor='complete'>Выполнено:</label>
                            <input id='complete' type='checkbox' checked={props.done}
                                onChange={()=>props.parentChangeDoneTaskHandler(props.id)}/>
                            <p></p>
                        </div>
                    </div>
            </div>)
}

Task.propTypes = {
    id:PropTypes.string,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string,
    done: PropTypes.bool,
    parentRemoveTaskHandler: PropTypes.func.isRequired,
    parentChangeDoneTaskHandler: PropTypes.func.isRequired
}