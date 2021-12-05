import {actionTypes} from '@BLL/actionTypes'

export const toggleAddModal = (payload) => {
    return {
        type: actionTypes.toggleAddModal,
        payload
    }
}