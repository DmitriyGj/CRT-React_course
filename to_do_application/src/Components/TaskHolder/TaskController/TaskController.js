import {PrioritySelector} from "../PrioritySelector/PrioritySelector";
import {Component} from "react";
import uuid from "react-uuid";

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
        if(this.state.taskTitle){
                 // this.props.parent.addTaskHandler(<Task id={uuid()}
                 //                                        done={false}
                 //                                        priority={this.state.taskPriority}
                 //                                        title = {this.state.taskTitle}
                 //                                        parentRemoveTaskHandler= {this.props.parent.removeTaskHandler}
                 //                                        completeTaskParentHandler={this.props.parent.changeDoneTaskHandler}/>);
            this.props.parent.addTaskHandler({id:uuid(),
                  done:false,
                  priority:this.state.taskPriority,
                  title :this.state.taskTitle});
        }
        else{
            alert('Название не может быть пустым')
        }
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
                                  parentChangeHandler = {this.changeTaskPriorityHandler}/>
                <button onClick={this.addTaskHandler}>Добавить</button>
            </div>
        );
    }
}

export {TaskController};
