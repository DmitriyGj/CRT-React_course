import PropTypes from 'prop-types';
import Task from './Components/Task';
import TaskHolder from './Components/TaskHolder'
import TaskController from './Components/TaskContoller'

Task.propTypes = {
    id:PropTypes.string,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string,
    done: PropTypes.bool,
    parentRemoveTaskHandler: PropTypes.func.isRequired,
    parentChangeDoneTaskHandler: PropTypes.func.isRequired
}

TaskHolder.propTypes={
    tasks: PropTypes.array,
    taskFilter: PropTypes.string,
};

TaskController.propTypes ={
    taskTitle: PropTypes.string,
    taskPriority: PropTypes.string
};