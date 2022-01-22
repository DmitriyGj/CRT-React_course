import {Selector} from "../../Selector/Selector";
import {Component} from "react";
import uuid from "react-uuid";
import {TaskPriority, TaskPriorityOptions } from "../../../Constants/Constants";
class TaskController extends Component
{
    constructor(props) {
        super(props);
        this.state={
            taskTitle:'',
            taskPriority:TaskPriority.Low,
        }
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.changeTaskPriorityHandler = this.changeTaskPriorityHandler.bind(this);
        this.changeTaskTitleHandler = this.changeTaskTitleHandler.bind(this);
    }

    changeTaskPriorityHandler(e){
        this.setState({taskPriority:TaskPriority[e.target.value]})
    }

    addTaskHandler(){
        if(!this.state.taskTitle){
            alert('Название не может быть пустым')
            return;
        }

        this.props.addTaskParentHandler({id:uuid(),
            done:false,
            priority:this.state.taskPriority,
            title :this.state.taskTitle});
            
        this.setState({taskTitle:'',taskPriority:TaskPriority.Low})
    }

    changeTaskTitleHandler(e){
        this.setState({taskTitle: e.target.value});
    }

    render() {
        return (
            <div className='TaskController'>
                <label> Заголовок
                    <input type = 'text' 
                            value={this.state.taskTitle}
                            onChange={this.changeTaskTitleHandler} />
                </label>
                <Selector title='Приоритет'
                                options ={TaskPriorityOptions}
                                parentValue ={this.state.taskPriority}
                                changeValueParentHandler = {this.changeTaskPriorityHandler}/>
                <button onClick={this.addTaskHandler}>Добавить</button>
            </div>
        );
    }
}

export {TaskController};
