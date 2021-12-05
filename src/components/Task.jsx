import React from 'react'
import { toggleComplete, removeTask } from '@BLL/actions/tasks'
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from '@material-ui/icons/Close'
import {Checkbox} from '@components/Checkbox'

export const Task = (props) => {
    const id = props.data.id
    const dispatch = useDispatch()
    const isShowCompleted = useSelector((state) => state.showCompleted)
    let taskClasses = 'Task'
    if (props.data.completed) {
        taskClasses += ' Task_Completed'
    }

    if (props.data.completed && !isShowCompleted) {
        taskClasses += ' Task_Hidden'
    }
    
    return (
        <div className={taskClasses}>
            <Checkbox id={'Task_' + id}
                    className="Task__CompleteCheckbox"
                    checked={props.data.completed}
                    onChange={(event) => dispatch(toggleComplete({ id: id, completed: event.target.checked }))}/>
            <div className="Task__Name">{props.data.name}</div>
            <button className="Task__RemoveButton" onClick={() => dispatch(removeTask(id))}>
                <CloseIcon fontSize="small" />
            </button>
        </div>
    )
}