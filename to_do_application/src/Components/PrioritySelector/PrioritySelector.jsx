import {Component} from "react";

class PrioritySelector extends Component{

    render(){
        const options=[{value:'Low',label:'Низкий'},{value:'Medium', label:'Средний'},{value:'High',label:'Высокий'}];
        return <label>Приоритет
                    <select onChange={this.props.parentChangeHandler} value={this.props.parentValue}>
                        {options.map(option=> <option value={option.value} label={option.label}></option>)}
                    </select>
                </label>
    }
}

export {PrioritySelector};


