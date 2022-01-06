import {Component} from 'react'
import {Task} from "../Task/Task";
import './TaskHolder.css'
import  uuid from 'react-uuid';

class TaskHolder extends  Component{
    constructor(props) {
        super(props);

        this.state ={
            newTaskTitle:'',
            tasks:[ ]
        };

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.changeNewTaskTitleHandler = this.changeNewTaskTitleHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
    }

    removeTaskHandler(task) {
        this.setState({tasks: this.state.tasks.filter(displayTask => displayTask.props.id !== task.props.id)})
    }

    changeNewTaskTitleHandler(e){
        this.setState({newTaskTitle: e.target.value});
    }

    addTaskHandler(){
        const titleForNewTask = this.state.newTaskTitle;
        const unique = this.state.tasks.every(instTask => instTask.props.title !== titleForNewTask)
        if(titleForNewTask){
            if(unique){
                const taskForAdding = (<Task id ={uuid()} title={this.state.newTaskTitle}
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
        return <div className='taskHolder'>
                    <div className='TaskCOnroller'>
                        <label> Заголовок
                            <input type = 'text' value={this.state.newTaskTitle}
                                   onChange={this.changeNewTaskTitleHandler} />
                        </label>

                        <button onClick={this.addTaskHandler}>Add</button>
                        <label>
                            <select><option>раз</option>
                                <option>два</option>
                                <option>три</option></select>
                        </label>
                    </div>
                    <ul>
                        {this.state.tasks.map(task=><li key = {task.props.id}>{task}</li>)}
                    </ul>
               </div>
    }
}

export {TaskHolder}