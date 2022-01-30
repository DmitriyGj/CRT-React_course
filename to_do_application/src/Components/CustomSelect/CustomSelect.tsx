import React from "react";
import {CustomSelectProps} from '../../types/types';
import './CustomSelect.css';

export const CustomSelect: React.FunctionComponent<CustomSelectProps> = function CustomSelect(props:CustomSelectProps) {
    const {title,options,changeValueParentHandler, parentValue}=props;

    return(
        <div className='CustomSelect'>
            <label>{title}</label>
            <select value ={parentValue}
                onChange ={(e)=>changeValueParentHandler(e.target.value)}>
                {options.map(option =><option {...option}/>)}
            </select>
        </div>
    );
};
