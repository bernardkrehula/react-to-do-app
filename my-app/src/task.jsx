import { useState } from "react"

const CreateTask = ({getTask, updateIsChecked, removeTask}) => {

    if(getTask != undefined){
    return(
            getTask.map(task => {
        
                const { id, info, isChecked } = task

                return(
                    <li className="task" key={id} style={{backgroundColor: isChecked ? 'rgb(206, 206, 206)' : 'transparent'}}>
                        <button className="checkTask" onClick={() => updateIsChecked(id)}>✔️</button>
                        <h2>{info}</h2>
                        <button className="removeTask" onClick={() => removeTask(id)}>X</button>
                    </li>
                )
            })
        )  
    }
     
   
}

export default CreateTask;