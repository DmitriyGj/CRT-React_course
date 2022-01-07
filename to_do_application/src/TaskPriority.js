class TaskPriority{
    constructor(name) {
        this.name = name;
    }

    static High = new TaskPriority('High');
    static Medium = new TaskPriority('Medium');
    static Low = new TaskPriority('Low');

    static Options = [TaskPriority.Low,TaskPriority.Medium,TaskPriority.High]

}


export default TaskPriority;