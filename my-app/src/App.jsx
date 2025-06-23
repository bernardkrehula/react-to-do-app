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
      setTask(prev => [
        ...prev,
        task
      ])
      inputValue.current.value = ''
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
        <CreateTask getTask={getTask}/>
      </div>
    </>
  )
}

export default App
