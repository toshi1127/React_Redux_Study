import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import taskReducer from '../reducers/tasks';

export default function configureStore() {
    return reduxCreateStore(
        combineReducers({//ルーティングのためのReducerとアプリケーションの(Stateを管理する)Reducerを合成する必要がある。
            //taskReducerをtaskというkeyに割り当てる
            task: taskReducer,
            //ルーティングのためのReducer
            router: routerReducer,
        }),
        applyMiddleware(
            //react-redux-routerのMiddleware
            routerMiddleware(history)
        )
    )
}