import React from "react";

export const Jumbotron = ( props ) => {
    return (
    <div style={{height: 150, clear: 'both'}} className="jumbotron jumbotron-fluid">
        <p className="lead">{props.leadValue}</p>
        {props.children}
    </div>
    )
};


export default Jumbotron;