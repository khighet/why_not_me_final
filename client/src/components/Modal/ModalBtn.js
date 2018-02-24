import React from "react";

export const ModalBtn = (props) =>{
  console.log("from ModalBtn " + JSON.stringify(props))
  var cntr = 0;
  var matchIdValue = props.matchid;
  
  // props.setid(matchIdValue)

  return (
  <div {...props} 
      style={{ float: "left", marginBottom: 10 }} 
      className="btn btn-primary" 
      data-toggle="modal" 
      data-target="#exampleModal"
      >

  </div>
  )
};