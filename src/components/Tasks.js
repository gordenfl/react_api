import React from "react"
import Task from"./Task"
const Tasks = ({ tasks, onDelete, onChange }) => {
    console.log(tasks)
    return (
        <>
        {
            tasks.map((task) =>( 
                <Task key={task.id} task={task} onDelete={onDelete} onChange={onChange} /> 
            ))
        }
        </>
    )
}

Tasks.defaultProps =  {
    tasks : {}
}
export default Tasks