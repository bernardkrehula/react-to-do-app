import { useState } from 'react'
import './App.css'
import CreateTask from './task'
import tasksData from './tasksData';
import { useRef } from 'react';
function App() {
  const [getTask, setTask ] = useState(tasksData);
  const inputValue = useRef(null);
  const setInputValue = (e) => {
    e.preventDefault();
    setTask(
      tasksData.push(
          {
            id: crypto.randomUUID(),
            task: inputValue.current.value,
            isChecked: false
          }
        )
    )
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
        <CreateTask task={getTask}/>
      </div>
    </>
  )
}

export default App
