import {Component} from "react";

export class Selector extends Component{
    render(){
        const {title,changeValueParentHandler, parentValue,options} = this.props;

        return <label>{title}
                    <select onChange={changeValueParentHandler} 
                            value={parentValue}>
                        {options.map(option=> <option {...option}></option>)}
                    </select>
                </label>
    }
}