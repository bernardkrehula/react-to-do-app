import { useState } from "react"

const CreateTask = ({getTask, updateIsChecked}) => {
    const [ getColor, setColor ] = useState()

    
   
    if(getTask != undefined){
    return(
            getTask.map(task => {
        
                const { id, info, isChecked } = task

                return(
                    <li className="task" key={id} style={{backgroundColor: isChecked ? 'rgb(206, 206, 206)' : 'transparent'}}>
                        <button className="checkTask" onClick={() => updateIsChecked(id)} style={{backgroundColor: getColor}}>✔️</button>
                        <h2>{info}</h2>
                        <button className="removeTask">X</button>
                    </li>
                )
            })
        )  
    }
     
   
}

export default CreateTask;