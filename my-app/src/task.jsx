import { useState } from "react";

const CreateTask = (task) => {
    console.log(task)

    return(
        <li className="task">
            <button className="checkTask">✔️</button>
            <h2>Wash dishes</h2>
            <button className="removeTask">X</button>
        </li>
    )
}

export default CreateTask;