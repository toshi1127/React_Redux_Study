import { createStore } from 'redux';
import taskReducer from '../reducers/tasks';

export default function configureStore() {
    const store = createStore(taskReducer);
    return store;
}