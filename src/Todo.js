import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText secondary="dummy dead line" primary={props.todo.todo}/>
                </ListItem>
                <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
            </List>
        </div>
    )
}

export default Todo
