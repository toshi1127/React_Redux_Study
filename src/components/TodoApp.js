import React from 'react'
import { inputTask, addTask } from '../actions/tasks';

//Conponent
export default function TodoApp({ store }) {
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