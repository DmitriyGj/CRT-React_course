import { ISelectorOption } from "../../../Constants/Constants";
import { Task } from "../../Task/TaskModel";

export interface TaskContollerProps{
    addTaskParentHandler(task:Task):void
}