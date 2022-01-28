import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Selector.css'
import { ISelectorProps } from "./SelectorModel";

export function Selector(props:ISelectorProps){
    const theme = useContext(ThemeContext)
    const {title,changeValueParentHandler, parentValue,options} = props;

    return  <div className={`${theme}Selector`}>
                <label>{title}
                    <select onChange={changeValueParentHandler} 
                            value={parentValue}>
                        {options.map(option=> <option {...option}></option>)}
                    </select>
                </label>
            </div>
    
}