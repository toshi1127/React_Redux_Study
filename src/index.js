import { createStore } from 'redux';

//Reducer(State,Stateを変更するメソッド)
//State
const initialState = {
    task: []
}

//Stateを変更するメソッド
function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: state.task.concat([action.payload.task])
            };
        default:
            return state;
    }
}

//Store アプリケーションと一対一の関係。全てのStateを管理している。
const store = createStore(tasksReducer);

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
});

console.log(store.getState())
//Actionの発行。
store.dispatch(addTask('Storeを学ぶ'));