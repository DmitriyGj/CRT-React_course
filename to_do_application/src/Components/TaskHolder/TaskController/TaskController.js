import {PrioritySelector} from "../PrioritySelector/PrioritySelector";
import {Component} from "react";
import uuid from "react-uuid";
import {ThemeContext} from '../../../contexts/ThemeContext';
import './TaskContoller.css';
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
            <ThemeContext.Consumer>{ value=>
                <div className={`TaskController ${value}Controller`}>
                    <label> Заголовок
                        <input className={value+'ControllerInput'} 
                            type = 'text' 
                            value={this.state.taskTitle}
                            onChange={this.changeTaskTitleHandler} />
                    </label>
                    <ThemeContext.Provider value = {value}>
                        <PrioritySelector parentValue ={this.state.taskPriority}
                                    parentChangeHandler = {this.changeTaskPriorityHandler}/>
                    </ThemeContext.Provider>
                    <button className={value+'ControllerBtn'} onClick={this.addTaskHandler}>Добавить</button>
                </div>
            }
            </ThemeContext.Consumer>
        );
    }
}

TaskController.propTypes ={
    parent: PropTypes.object
};

export {TaskController};
