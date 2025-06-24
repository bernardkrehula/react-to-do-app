import { useState } from 'react'
import './App.css'
import CreateTask from './task'
import { useRef } from 'react';
function App() {
  const [getTask, setTask ] = useState([]);
  const inputValue = useRef(null);

  const setInputValue = (e) => {
    e.preventDefault();
    const task = {
      id: crypto.randomUUID(),
      info: inputValue.current.value,
      isChecked: false
    }
    if(inputValue.current.value){
      setTask(prev => [
              ...prev,
              task
            ])
    }
    inputValue.current.value = ''
  }
  const updateIsChecked = (id) => {
    setTask(getTask.map(task => {
      return task.id === id ? {...task, isChecked: !task.isChecked} : task
    })) 
  }
  const removeTask = (id) => {
    setTask(getTask.filter(task => task.id !== id))
  }
 
  return (
    <>
      <div className='main'>
        <form className='addTask' onSubmit={setInputValue}>
          <h1>To do list</h1>
          <div>
            <input placeholder='Title...' ref={inputValue}></input>
            <button type='submit'>Add</button>
          </div>
        </form>
        <CreateTask getTask={getTask} updateIsChecked={updateIsChecked} removeTask={removeTask}/>
      </div>
    </>
  )
}

export default App
