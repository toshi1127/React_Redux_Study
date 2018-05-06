import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'

//Reducer(State,Stateを変更するメソッド)
//State
const initialState = {
    task: '',
    tasks: ['React','Redux']
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
                tasks: state.tasks.concat([action.payload.task])
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
                tasks: []
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
//const unsubscribe = store.subscribe(handleChange)

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

//Conponent
function TodoApp({ store }) {
    const { task, tasks } = store.getState()
    console.log(tasks)
    return (
        <div>
            <input type='text' onChange={(e) => store.dispatch(inputTask(e.target.value))} />
            <input type='button' value='add' onClick={() => store.dispatch(addTask(task))} />
            <ul>
                {
                    tasks.map(function (item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

//Conponetの描画
function renderApp(store){
    render(
        <TodoApp store={store}/>,
        document.getElementById('root')
    );
}

//Stateの変更のたびに描写
store.subscribe(()=> renderApp(store))
//初回の描写
renderApp(store);