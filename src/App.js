import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter/';
import { TodoSearch } from './TodoSearch/';
import { TodoList } from './TodoList/';
import { TodoItem } from './TodoItem/';
import { CreateTodoButton } from './CreateTodoButton/';
import { ModalForm } from './ModalForm/';

import { TodoForm } from './TodoForm';

function App(props) {
  
  let defaultTasks = [];
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [tasks, setTasks] = React.useState(defaultTasks);
  const [showModal, setShowModal] = React.useState(false);
  const [searchValue, setSearchvalue] = React.useState('');

  const completedTasks = tasks.filter(task => !!task.completed).length
  const total = tasks.length;

  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter(task => {
      const taskText =  task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    })
  }

  const updateTasks = (newTasks) => {
    const myNewTasks = JSON.stringify(newTasks);
    localStorage.setItem("myTasks", myNewTasks);
    setTasks(newTasks);
  }

  const onComplete = (taskId) => {     
    const newTasks = [...tasks];   
    const myTask = newTasks.find((task) => task.id === taskId);
    myTask.completed = true; 
    updateTasks(newTasks);    
  }

  const onDelete = (taskId) => {
    const newTasks = [...tasks];
    const indexTask = newTasks.findIndex((task) => task.id === taskId);
    newTasks.splice(indexTask, 1);
    updateTasks(newTasks);
  }

  const addTask = (task) => {
    console.log("task===> ", task);
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text: task
    });
    updateTasks(newTasks);
  }


  React.useEffect(() => {      
  let savedTasks = localStorage.getItem("myTasks");
  if (!savedTasks) {
    localStorage.setItem("myTasks", []);
  } else {    
      defaultTasks = JSON.parse(savedTasks);
      setTasks(defaultTasks);
      (defaultTasks) ? setLoading(false) : setLoading(true);    
  }
  }, []);

  return (
    <>
      <TodoCounter total={total} completed={completedTasks} />
      <TodoSearch searchValue={searchValue} setSearchvalue={setSearchvalue}/>
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedTasks.length) && <p>Crea tu primer tarea</p>}

        {searchedTasks.map((task) => {
        return  <TodoItem onComplete={() => onComplete(task.id)} onDelete={() => onDelete(task.id)} key={task.text} text={task.text} completed={task.completed} />
        })} 
      </TodoList>
      <CreateTodoButton setShowModal={setShowModal} showModal={showModal}/>        
      {showModal &&
      (
          <ModalForm>
            <TodoForm setShowModal={setShowModal} addTask={(task) => addTask(task)}></TodoForm>
         </ModalForm>
      )};
   
    </>

  );
}

export default App;
