import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { TaskBgColors } from "../../Constants/Constants.js";
import './Task.css'

export function Task(props) {
    const theme = useContext(ThemeContext);
    const {id, title, priority , done, changeDoneTaskParentHandler, removeTaskParentHandler} = props; 

    return (<div className={`Task ${theme+TaskBgColors[priority]}`}>
                    <div className='TaskHeader '>
                        <p>{title}</p>
                        <button className={'TaskBtn'} 
                        onClick={()=>removeTaskParentHandler(id)}>Удалить</button>
                    </div>
                    <div>
                        <div className='CompleteBlock'>
                            <label htmlFor='complete'>Выполнено:</label>
                            <input id='complete' 
                                type='checkbox' 
                                checked={done}
                                onChange={()=>changeDoneTaskParentHandler(id)}/>
                        </div>
                    </div>
            </div>)
}
