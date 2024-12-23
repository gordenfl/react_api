import React from "react";
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return (
         <button 
            style={{ backgroundColor:color }}
            className='btn'
            onClick={onClick}
        >
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'black'
}
Button.propTypes = {
    text:PropTypes.string
}

export default Button