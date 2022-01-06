import {Component} from "react";

class Task extends Component{
    constructor(props) {
        super(props);
        this.key = props.key;
        this.state={
            complete:false,
            title:props.title,
        };
        this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
    }

    toggleCompleteStatus=(e)=>{
        this.setState({complete: e.target.checked})
    }

    render(){
        return <div>
                    <div className='TaskHeader'>
                        <h1>{this.state.title}</h1>
                        <div className='TaskControls'>
                            <button>Edit</button>
                            <button onClick={()=>this.props.parentRemoveTaskHandler(this)}>Remove</button>
                        </div>
                    </div>
                    <label>Выполнено:
                        <input type='checkbox' value={this.state.complete}
                               onChange={this.toggleCompleteStatus}/>
                    </label>

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