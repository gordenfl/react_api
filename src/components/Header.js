import React from "react";

import Button from './Button';

const name = "Gordon"
const Header = ({showAdd, showAddTask}) => {
    return(
    <div>
        <h1> Task Tracker of {name}</h1>
        <p align="right"><Button color='green' text={showAddTask?'Close':'Add'} onClick={showAdd} /></p>
    </div>
    )
}


export default Header;