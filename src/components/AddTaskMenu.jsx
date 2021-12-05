import React, { useState } from 'react'
import { toggleAddModal } from '@BLL/actions/interface'
import { addTask } from '@BLL/actions/tasks'
import { useDispatch } from "react-redux"
import { Button } from '@components/Button'

export const AddTaskMenu = () => {
    const [taskName, setTaskName] = useState('')
    const dispatch = useDispatch()

    const add = () => {
        dispatch(addTask(taskName))
        dispatch(toggleAddModal(false))
    }

    return (
        <div className="AddTaskMenu">
                <label htmlFor="name">Новая задача</label>
                <input type="text" id="name" onInput={(event) => setTaskName(event.target.value)} value={taskName}/>
                <Button className="AddTaskMenu__Button" onClick={() => add()}>Добавить</Button>
        </div>
    )
}