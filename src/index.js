import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'
import TodoApp from './components/TodoApp';
import configureStore from './store/configerStore';

const store = configureStore()

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
renderApp(store)