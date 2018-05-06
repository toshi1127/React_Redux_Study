import { createStore } from 'redux'

//Reducer(State,Stateを変更するメソッド)
//State
const initialState = {
    task: '',
    task: []
}

//Stateを変更するメソッド
//taskを加える
function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            }
        case 'ADD_TASK':
            return {
                ...state,
                task: state.task.concat([action.payload.task])
            }
        default:
            return state
    }
}

//taskをリセットする
function resetReducer(state = initialState, action) {
    switch (action.type) {
        case 'REAET_TASK':
            return {
                ...state,
                task: []
            }
        default:
            return state
    }
}

//Store アプリケーションと一対一の関係。全てのStateを管理している。
const store = createStore(taskReducer)

//subscribeを使うと、Stateが変更するたびにコールバックメソッドとして、引数の関数を実行できる。
function handleChange() {
    console.log(store.getState())
}
const unsubscribe = store.subscribe(handleChange)

//Action
const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task: task
    }
})

const resetTask = (task) => ({
    type: 'REAET_TASK'
})

const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task: task
    }
})

console.log(store.getState())
//Actionの発行。
store.dispatch(addTask('Storeを学ぶ'))
store.replaceReducer(resetReducer)
store.dispatch(resetTask())
console.log(store.getState())