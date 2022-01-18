import React from "react";

import Button from './Button';

const name = "Gordon"
const Header = ({showAdd}) => {
    return(
    <div>
        <h1> Task Tracker of {name}</h1>
        <p align="right"><Button color='green' text='Add' onClick={showAdd} /></p>
    </div>
    )
}


export default Header;