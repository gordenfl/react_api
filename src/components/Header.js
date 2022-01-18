import React from "react";
import PropTypes from 'prop-types';
import Tasks from './Tasks';


const Header = ({ tasks, onDelete, onChange}) => {
    return(
        <header>
            <Tasks tasks={tasks} onDelete={onDelete} onChange={onChange}/>
        </header>
    )
}

Header.defaultProps =  {
    tasks: [],
}

Header.propTypes = {
    //title: PropTypes.string.isRequired,
    //age: PropTypes.string,
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onChange: PropTypes.func,
}

export default Header