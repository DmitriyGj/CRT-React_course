import {Component} from "react";
import uuid from "react-uuid";
import { ThemeContext } from "../../../contexts/ThemeContext";
import './PrioritySelector.css';
import PropTypes from "prop-types";

class PrioritySelector extends Component{

    render(){
        const options=[{value:'Low',label:'Низкий'},{value:'Medium', label:'Средний'},{value:'High',label:'Высокий'}];
        return <ThemeContext.Consumer>{ value =>
                <label>Приоритет
                        <select className={value+'PrioritySelector'} 
                                value={this.props.parentValue}
                                onChange={this.props.parentChangeHandler} >
                            {options.map(option=> <option key={uuid()} value={option.value} label={option.label}></option>)}
                        </select>
                </label> } 
            </ThemeContext.Consumer> 
    }
}

PrioritySelector.propTypes={
    parentValue: PropTypes.string.isRequired,
    parentChangeHandler: PropTypes.func
};

export {PrioritySelector};


