import React from "react";

import { Input, SaveBtn, FormBtn } from "../../components/Form";


//fcn name
export const Modal = (props) =>{

  console.log("from modal " + JSON.stringify(props))
  // const loadOverture =() =>{

  //props.setid(props.matchid)
  // }
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/* <form> */}
            
            <Input 
                name="woo" 
                type="text"
                data-id={props.name}
                id="targetId"
                onChange={props.hndlmethod}
                placeholder="Pitch Woo Here" />

          <SaveBtn
                disabled={!(props.woovalue)}
                onClick={props.savemethod}
                >
               Pitch That Woo!
            </SaveBtn>

        {/* </form> */}


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary" onClick={() =>{
          alert("sxx")
          {tst2}
        }}> */}

      {/* <button 
        type="button" 
        className="btn btn-primary">

        Save changes</button> */}
      </div>
    </div>
  </div>

</div>
  )

 };
//   <li classNameName="list-group-item">
//     {props.children}
//   </li>;  
