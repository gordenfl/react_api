import React from "react"
import Task from"./Task"
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, onChange }) => {
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


Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChange: PropTypes.func,
}

export default Tasks