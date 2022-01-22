import {Component} from "react";
import { TaskBgColors } from "../../Constants/Constants";
import './Task.css';

class Task extends Component{
    render(){
        const {id, title, priority , done, changeDoneTaskParentHandler, removeTaskParentHandler} = this.props; 

        return <div className={`Task ${TaskBgColors[priority]}`}>
                    <div className='TaskHeader '>
                        <h1>{title}</h1>
                        <div className='TaskControls'>
                            <button onClick={()=>removeTaskParentHandler(id)}>Удалить</button>
                        </div>
                    </div>
                    <div className='CompleteBlock'>
                        <label htmlFor='complete'>Выполнено:</label>
                        <input id='complete' 
                               type='checkbox' 
                               checked={done}
                               onChange={()=>changeDoneTaskParentHandler(id)}/>
                    </div>
              </div>
    }
}

export {Task}