//Action
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task: task
    }
})

export const resetTask = (task) => ({
    type: 'REAET_TASK'
})

export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task: task
    }
})