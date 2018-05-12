import React from 'react'
import Reboot from 'material-ui/Reboot'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/ToolBar'
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import List, { ListItem, ListItemText } from 'material-ui/List';
import styled from 'styled-components';

const TodoList = styled.div`
  padding:16px;
`

//Conponent
export default function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
    return (
        <div>
            <Reboot />
            <AppBar position='static'>
                <ToolBar>
                    <Typography type='title' color='inherit'>
                        Todo
            </Typography>
                </ToolBar>
            </AppBar>
            <TodoList>
                <Input type='text' onChange={(e) => inputTask(e.target.value)} />
                <Button raised color='primary' onClick={() => addTask(task)} >add</Button>
                <List>
                    {
                        tasks.map(function (item, i) {
                            return (
                                <ListItem key={i}>
                                    <ListItemText primary={`.${item}`} />
                                </ListItem>
                            )
                        })
                    }
                </List>
                <button onClick={() => redirectToError()}>エラーページへ</button>
            </TodoList>
        </div>
    )
}