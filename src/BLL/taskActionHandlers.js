export const addTask = (taskList, name) => {
    const taskListCopy = [...taskList]
    taskListCopy.push({
        id: searchNextFreeId(taskListCopy.map((task) => task.id)),
        name,
        completed: false,
    })

    return taskListCopy
}

export const removeTask = (taskList, id) => {
    const taskListCopy = [...taskList]
    const targetTaskIndex = taskListCopy.indexOf(taskListCopy.find((task) => task.id === id))
    taskListCopy.splice(targetTaskIndex, 1)
    return taskListCopy
}

export const toggleCompleteTask = (taskList, {id, completed}) => {
    const taskListCopy = [...taskList]
    taskListCopy.forEach((task) => {
        if (task.id === id) {
            task.completed = completed
        }
    })

    return taskListCopy
}

function searchNextFreeId(idList) {
    let lastId = idList.reduce((prev, cur) => {
        return cur > prev ? cur : prev
    })

    return ++lastId
}