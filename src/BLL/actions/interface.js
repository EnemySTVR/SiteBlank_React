import {actionTypes} from '@BLL/actionTypes'

export const toggleAddModal = (payload) => {
    return {
        type: actionTypes.toggleAddModal,
        payload
    }
}

export const toggleShowCompletedTasks = (payload) => {
    return {
        type: actionTypes.toggleShowCompletedTasks,
        payload
    }
}