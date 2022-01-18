import React from "react";
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onChange}) => {
    return (
        <div className="task" style={{textAlign:"left"}} onDoubleClick={()=> onChange(task.id)}>
            <h3>{task.text} <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            <p>Reminded: {task.reminder.toString()}</p>
        </div>
    )
}

export default Task;