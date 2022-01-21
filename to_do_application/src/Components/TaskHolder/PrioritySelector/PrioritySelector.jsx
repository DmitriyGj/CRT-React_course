import uuid from "react-uuid";
import {useContext} from 'react';
import { ThemeContext } from "../../../contexts/ThemeContext";
import './PrioritySelector.css';
import PropTypes from "prop-types";

export function PrioritySelector(props){

        const options=[{value:'Low',label:'Низкий'},{value:'Medium', label:'Средний'},{value:'High',label:'Высокий'}];

        const theme = useContext(ThemeContext);

        return (<label>Приоритет
                        <select className={theme+'PrioritySelector'} 
                                value={props.parentValue}
                                onChange={props.parentChangePriorityHandler} >
                            {options.map(option=> <option key={uuid()} value={option.value} label={option.label}></option>)}
                        </select>
                </label>)
}

PrioritySelector.propTypes={
    parentValue: PropTypes.string.isRequired,
    parentChangeHandler: PropTypes.func
};



