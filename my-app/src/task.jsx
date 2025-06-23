
const CreateTask = (getTask) => {
    
    return(
        getTask.getTask.map(task => {
    
            const { id, info, isChecked } = task
            return(
                <li className="task" key={id}>
                    <button className="checkTask">✔️</button>
                    <h2>{info}</h2>
                    <button className="removeTask">X</button>
                </li>
            )
        })
    )  
   
}

export default CreateTask;