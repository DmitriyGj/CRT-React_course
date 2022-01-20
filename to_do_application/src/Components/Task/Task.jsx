import {Component} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PropTypes from 'prop-types';
import './Task.css'

class Task extends Component{
    defineBackgroundColor(){
        switch (this.props.priority){
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

    render(){
        return  <ThemeContext.Consumer>{ value=>
        <div className={`Task ${value+this.defineBackgroundColor()}`}>
                    <div className='TaskHeader '>
                        <p>{this.props.title}</p>
                        <button className={value+'TaskBtn'} onClick={()=>this.props.parentRemoveTaskHandler(this.props.id)}>Удалить</button>
                    </div>
                    <div className='CompleteBlock'>
                        <label htmlFor='complete'>Выполнено:</label>
                        <input id='complete' type='checkbox' checked={this.props.done}
                               onChange={()=>this.props.parentChangeDoneTaskHandler(this.props.id)}/>
                    </div>
            </div>}
        </ThemeContext.Consumer> 
    }
}

Task.propTypes = {
    id:PropTypes.string,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string,
    done: PropTypes.bool,
    parentRemoveTaskHandler: PropTypes.func.isRequired,
    parentChangeDoneTaskHandler: PropTypes.func.isRequired
}

export {Task}