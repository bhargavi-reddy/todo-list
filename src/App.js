import { CssBaseline, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import useStyles from './components/Todo/todostyle'

function App() {
  const classes = useStyles();
  const [todoArr, setTodoArr] = useState([])
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {

    if(localStorage.getItem('todoArr')){
      setTodoArr(JSON.parse(localStorage.getItem('todoArr')))
    }
    
    return () => {
      
    }
  }, [])
  return (
   <>
   <CssBaseline></CssBaseline>
   <Header setTodoArr={setTodoArr} todoArr={todoArr} setInputVal={setInputVal} inputVal={inputVal}></Header>
   <Grid container spacing={3} >
     <Grid item xs={12} md={4} className={classes.todo} >
        <Todo todoArr={todoArr} level={0} setTodoArr={setTodoArr}></Todo>
     </Grid>
     <Grid item xs={12} md={4}  className={classes.todo}>
     <Todo todoArr={todoArr} level={1} setTodoArr={setTodoArr}></Todo>
      </Grid>
      <Grid item xs={12} md={4} className={classes.todo}>
      <Todo todoArr={todoArr} level={2} setTodoArr={setTodoArr}></Todo>
      </Grid>
    </Grid>
   </>
  );
}

export default App;
