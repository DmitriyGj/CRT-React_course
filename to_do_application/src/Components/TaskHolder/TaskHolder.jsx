import {Component} from 'react'
import {Task} from "../Task/Task";
import './TaskHolder.css'
import  uuid from 'react-uuid';
import {PrioritySelector} from "../PrioritySelector/PrioritySelector";

class TaskHolder extends  Component{
    constructor(props) {
        super(props);

        this.state ={
            newTaskTitle:'',
            newTaskPriority:'Low',
            tasks:[ ]
        };

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.changeNewTaskTitleHandler = this.changeNewTaskTitleHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        this.changeNewTaskPriorityHandler = this.changeNewTaskPriorityHandler.bind(this);
    }

    removeTaskHandler(task) {
        this.setState({tasks: this.state.tasks.filter(displayTask => displayTask.props.id !== task.props.id)})
    }

    changeNewTaskTitleHandler(e){

        this.setState({newTaskTitle: e.target.value});
    }

    changeNewTaskPriorityHandler(e){

        const value = e.target.value;
        this.setState({newTaskPriority:value})
    }

    addTaskHandler(){
        const titleForNewTask = this.state.newTaskTitle;
        const unique = this.state.tasks.every(instTask => instTask.props.title !== titleForNewTask)
        if(titleForNewTask){
            if(unique){
                const taskForAdding = (<Task id ={uuid()}
                                             priority = {this.state.newTaskPriority}
                                             title={this.state.newTaskTitle}
                                             parentRemoveTaskHandler = {this.removeTaskHandler} />);
                this.setState({tasks:[...this.state.tasks,taskForAdding ]});
            }
            else{
                alert('Такое задание уже существует')
            }
        }
        else{
            alert('Имя задачи не может быть пустым');
        }
    }

    render() {
        return <div className='TaskHolder'>
                    <h2>Управление заданиями</h2>
                    <div className='TaskController'>
                        <label> Заголовок
                            <input type = 'text' value={this.state.newTaskTitle}
                                   onChange={this.changeNewTaskTitleHandler} />
                        </label>
                        <PrioritySelector parentValue ={this.state.newTaskPriority}
                            parentChangeHandler = {this.changeNewTaskPriorityHandler}/>
                        <button onClick={this.addTaskHandler}>Добавить</button>
                    </div>
                    <ul>
                        {this.state.tasks.map(task=><li key = {task.props.id}>{task}</li>)}
                    </ul>
               </div>
    }
}

export {TaskHolder}