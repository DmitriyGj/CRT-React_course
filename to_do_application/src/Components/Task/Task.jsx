import {Component} from "react";
import './Task.css'

class Task extends Component{
    defineBackgroundColor(){
        switch (this.props.priority){
            case 'High':{
                return 'HighPriorityTask'
            }
            case 'Medium':{
                return 'MediumPriorityTask'
            }
            case 'Low':{
                return  'LowPriorityTask'
            }
        }
    }

    render(){
        console.log(this.props.done)
        return <div className={`Task ${this.defineBackgroundColor()}`}>
                    <div className='TaskHeader '>
                        <h1>{this.props.title}</h1>
                        <div className='TaskControls'>
                            <button>Редактировать</button>
                            <button onClick={()=>this.props.parentRemoveTaskHandler(this)}>Удалить</button>
                        </div>
                    </div>
                    <div className='CompleteBlock'>
                        <label htmlFor='complete'>Выполнено:</label>
                        <input id='complete' type='checkbox' checked={this.props.done}
                               onChange={()=>this.props.changeDoneTaskParentHandler(this)}/>
                    </div>
              </div>
    }
}

export {Task}