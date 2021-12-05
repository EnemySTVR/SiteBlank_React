import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes } from '@BLL/actionTypes'
import { Checkbox } from '@components/Checkbox'
import { toggleShowCompletedTasks } from '@BLL/actions/interface'

export const ToolsBar = () => {
    const dispatch = useDispatch()
    const isShowCompleted = useSelector((state) => state.showCompleted)
    const tooleShowCompleted = (completed) => {
        dispatch(toggleShowCompletedTasks(completed))
    }

    const calcTasksNumber = () => {
        const taskList = useSelector((state) => state.taskList)
        let tasksNumber = isShowCompleted ?
            tasksNumber = taskList.length
            : tasksNumber = taskList.filter((task) => task.completed === false).length
        return tasksNumber
    }

    return (
        <div className="ToolsBar">
            <div className="ToolsBar__TasksCounter">Задач в списке: {calcTasksNumber()}</div>
            <div className="ToolsBar__ViewCompletedToogler">
            <Checkbox id="ViewCompletedToogler"
                    onChange={(event) => tooleShowCompleted(event.target.checked)}
                    checked={isShowCompleted}/>
                {/* <input type="checkbox"
                    id="ViewCompletedToogler"
                    checked={isShowCompleted}
                    onChange={(event) => tooleShowCompleted(event.target.checked)}/> */}
                <label htmlFor="ViewCompletedToogler">Показать завершенные</label>
            </div>
        </div>
    )
}