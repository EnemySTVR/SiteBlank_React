import {defaultState} from '@BLL/defaultState'
import {actionTypes} from '@BLL/actionTypes'
import {addTask, removeTask, toggleCompleteTask} from '@BLL/taskActionHandlers'

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.addTask:
            return { ...state, taskList: addTask(state.taskList, action.payload) }
        case actionTypes.removeTask:
            return { ...state, taskList: removeTask(state.taskList, action.payload) }
        case actionTypes.toggleCompleteTask:
            return { ...state, taskList: toggleCompleteTask(state.taskList, action.payload) }
        case actionTypes.toggleShowCompletedTasks:
            return { ...state, showCompleted: action.payload }
        case actionTypes.toggleAddModal:
            return { ...state, showAddModal: action.payload }
        default:
            return state
    }
}