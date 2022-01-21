import {Component} from "react";
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
        return <div className={`Task ${this.defineBackgroundColor()}`}>
                    <div className='TaskHeader '>
                        <h1>{this.props.title}</h1>
                        <div className='TaskControls'>
                            <button onClick={()=>this.props.parentRemoveTaskHandler(this.props.id)}>Удалить</button>
                        </div>
                    </div>
                    <div className='CompleteBlock'>
                        <label htmlFor='complete'>Выполнено:</label>
                        <input id='complete' type='checkbox' checked={this.props.done}
                               onChange={()=>this.props.parentChangeDoneTaskHandler(this.props.id)}/>
                    </div>
              </div>
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