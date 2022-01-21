import {useContext} from "react";
import uuid from "react-uuid";
import { ThemeContext } from "../../../contexts/ThemeContext";
import './TaskFilterSelector.css'
import PropTypes from "prop-types";

export function TaskFilterSelector(props){

        const options = [{value:(task)=>task, label: 'Все'},
                         {value:(task)=>(task.done===true),  label:'Выполненные'},
                         {value:(task)=>(task.done===false),label:'Текущие'}];

        const theme = useContext(ThemeContext);

        return (<label>Показать
                    <select className={theme+'FilterSelector'}
                            value={props.parentFilterValue}
                            onChange={props.parentChangeFilterHandler}>
                        {options.map(filter => <option key ={uuid()}  value={filter.value.toString()} label={filter.label}></option>)}
                    </select>
                </label>);
}

TaskFilterSelector.propTypes={
    parentFilterValue: PropTypes.string,
    parentChangeFilterHandler: PropTypes.func
};