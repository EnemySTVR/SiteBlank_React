import {actionTypes} from '@BLL/actionTypes'

export const addTask = (name) => {
    return {
        type: actionTypes.addTask,
        payload: name
    }
}

export const removeTask = (id) => {
    return {
        type: actionTypes.removeTask,
        payload: id
    }
}

export const toggleComplete = (payload) => {
    return {
        type: actionTypes.toggleCompleteTask,
        payload
    }
}
