import {Component} from "react";

class Task extends Component{
    constructor(props) {
        super(props);

        this.state={
            complete:false,
            title:this.props.title,
            createdDate:new Date(),
            endDate:new Date()
        };

        this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
        this.changeCreatedDate = this.changeEndDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
    }

    toggleCompleteStatus(){
        this.setState({complete: !this.state.complete})
    }

    changeCreatedDate(e){
        this.setState({createDate: Date.parse(e.target.value)})
    }

    changeEndDate(e){
        this.setState({endDate:Date.parse(e.target.value)})
    }

    render(){
        return <div>
                    <div className='TaskHeader'>
                        <h1>{this.state.title}</h1>
                        <div className='TaskControls'>
                            <button>Edit</button>
                            <button>Delete</button>
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