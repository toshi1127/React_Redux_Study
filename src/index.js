import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configerStore';
import TodoApp from './containers/TodoApp';
import createBrowserHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux';

const history = createBrowserHistory()
const store = configureStore(history)

//Conponetの描画
function renderApp(store) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <TodoApp />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}

//Stateの変更のたびに描写
store.subscribe(() => renderApp(store))
//初回の描写
renderApp(store)