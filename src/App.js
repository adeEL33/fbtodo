import React , { useEffect,useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase  from 'firebase';
function App() {
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');
  
  const addTodo = (e) => {
    e.preventDefault();
    if(input.trim() !== "")
    db.collection('todos').add(
      {
        todo:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    setInput('');
  }

  useEffect( ()=>{
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo}) ))
    })

    console.log(todos);
  } ,[]);
  return (
    <div className="App">
      Todo Application
      <br />
      <form>
        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input id="standard-basic" label="Standard"  value={input} onChange={ e => setInput(e.target.value) } />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>save</Button>
        </FormControl>
      </form>
      <ul>
          {
          todos.map(todo =>
            (<Todo todo={todo} />)
            )
      }
      </ul>
    </div>
  );
}

export default App;
