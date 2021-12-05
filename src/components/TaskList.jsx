import React, { useState } from 'react'
import { ToolsBar } from '@components/ToolsBar'
import { Task } from '@components/Task'
import { useDispatch, useSelector } from 'react-redux'

export const TaskList = () => {
    const taskList = useSelector(state => state.taskList)
    return (
        <div className="TaskList">
            <ToolsBar />
            <div className="TaskList__Tasks">
                {taskList.map((task) => <Task data={task} key={task.id}/>)}
            </div>
        </div>
    )
}