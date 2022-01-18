import {PrioritySelector} from "../PrioritySelector/PrioritySelector";
import {Component} from "react";
import uuid from "react-uuid";
import PropTypes from 'prop-types';

class TaskController extends Component
{
    constructor(props) {
        super(props);
        this.state={
            taskTitle:'',
            taskPriority:'Low',
        }
        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.changeTaskPriorityHandler = this.changeTaskPriorityHandler.bind(this);
        this.changeTaskTitleHandler = this.changeTaskTitleHandler.bind(this);
    }

    changeTaskPriorityHandler(e){
        this.setState({taskPriority:e.target.value})
    }

    addTaskHandler(){
        if(!this.state.taskTitle){
            alert('Название не может быть пустым')
            return;
        }

        this.props.parent.addTaskHandler({id:uuid(),
            done:false,
            priority:this.state.taskPriority,
            title :this.state.taskTitle});
            
        this.setState({taskTitle:'',taskPriority:'Low'})
    }

    changeTaskTitleHandler(e){
        this.setState({taskTitle: e.target.value});
    }

    render() {
        return (
            <div className='TaskController'>
                <label> Заголовок
                    <input type = 'text' value={this.state.taskTitle}
                           onChange={this.changeTaskTitleHandler} />
                </label>
                <PrioritySelector parentValue ={this.state.taskPriority}
                                  parentChangePriorityHandler = {this.changeTaskPriorityHandler}/>
                <button onClick={this.addTaskHandler}>Добавить</button>
        </div>
        );
    }
}

TaskController.propTypes ={
    parent: PropTypes.object
};

export {TaskController};
