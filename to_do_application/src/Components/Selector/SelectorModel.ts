import { ISelectorOption } from "../../Constants/Constants";
import React from "react";

export interface ISelectorProps{
    title:string;
    changeValueParentHandler(e:React.ChangeEvent):void;
    parentValue:string;
    options: ISelectorOption[];
}