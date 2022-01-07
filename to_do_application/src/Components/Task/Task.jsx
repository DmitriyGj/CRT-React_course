import {Component} from "react";
import './Task.css'
import TaskPriority from "../../TaskPriority";


class Task extends Component{
    constructor(props) {
        super(props);
        this.state={
            complete:false,
            title:props.title,
            priority: props.priority
        };
        this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
    }

    toggleCompleteStatus=(e)=>{
        this.setState({complete: e.target.checked})
    }

    defineBackgroundColor(){
        switch (this.state.priority){
            case 'High':{
                return 'HighPriorityTask'
                break;
            }
            case 'Medium':{
                return 'MediumPriorityTask'
                break;
            }
            case 'Low':{
                return  'LowPriorityTask'
                break;
            }
        }
    }

    render(){
        return <div className={`Task ${this.defineBackgroundColor()}`}>
                    <div className='TaskHeader '>
                        <h1>{this.state.title}</h1>
                        <div className='TaskControls'>
                            <button>Редактировать</button>
                            <button onClick={()=>this.props.parentRemoveTaskHandler(this)}>Удалить</button>
                        </div>
                    </div>
                    <div className='CompleteBlock'>
                        <label htmlFor='complete'>Выполнено:</label>
                        <input id='complete' type='checkbox' value={this.state.complete}
                               onChange={this.toggleCompleteStatus}/>
                    </div>

                    {/*<div className='DatesBlock'>*/}
                    {/*    <label>*/}
                    {/*        Дата создания:*/}
                    {/*        <input type='date' value={this.state.createdDate.toString()}*/}
                    {/*               onChange={this.changeCreatedDate}/>*/}
                    {/*    </label>*/}
                    {/*    <label>*/}
                    {/*        Дата создания:*/}
                    {/*        <input type='date' value={this.state.endDate.toString()}*/}
                    {/*               onChange={this.changeEndDate}/>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
              </div>
    }
}

export {Task}