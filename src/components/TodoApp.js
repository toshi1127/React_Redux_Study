import React from 'react'
import Reboot from 'material-ui/Reboot'
import Button from 'material-ui/Button'

//Conponent
export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
    return (
        <div>
            <Reboot />
            <input type='text' onChange={(e) => inputTask(e.target.value)} />
            <Button raised color='primary' onClick={() => addTask(task)} >add</Button>
            <ul>
                {
                    tasks.map(function (item, i) {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={() => redirectToError()}>エラーページへ</button>
        </div>
    )
}