import {Component} from "react";
import uuid from "react-uuid";
import { ThemeContext } from "../../../contexts/ThemeContext";
import './TaskFilterSelector.css'
import PropTypes from "prop-types";

class TaskFilterSelector extends Component{

    render() {
        const options = [{value:(task)=>task, label: 'Все'},
                         {value:(task)=>(task.done===true),  label:'Выполненные'},
                         {value:(task)=>(task.done===false),label:'Текущие'}];

        return (
            <ThemeContext.Consumer>{
                value=> <label>Показать
                <select className={value+'FilterSelector'}
                        value={this.props.parentFilterValue}
                        onChange={this.props.parentChangeFilterHandler}>
                    {options.map(filter => <option key ={uuid()}  value={filter.value.toString()} label={filter.label}></option>)}
                </select>
            </label>}

            </ThemeContext.Consumer>
            
        );
    }
}

TaskFilterSelector.propTypes={
    parentFilterValue: PropTypes.string,
    parentChangeFilterHandler: PropTypes.func
};

export {TaskFilterSelector};