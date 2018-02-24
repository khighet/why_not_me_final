import React                            from "react";
import { Modal,ModalBtn}                from "../../components/Modal";
import { Input, SaveBtn, FormBtn }      from "../../components/Form";

export const CarouselInner = ( props ) => {
  console.log("props from carousel inner " + props.img)

  // const tst4 = ()=>{}

  //   alert("zz")
  // }
var className = "carousel-item";
if (props.active) {
  className += " active";
}

return (
    <div className={className}>
      <div>
         <ModalBtn 
          name         ={props.name} 
          matchid      ={props.matchid}
          hndlmethod   ={props.hndlmethod}
          loadmethod   ={props.loadmethod}
          setid        ={props.setid}
          img          ={props.img}
          onClick={()  => props.setid(props.matchid)}
         >

           Talk Some Smack to {props.name}

          </ModalBtn>

  
       </div>                 
      <img className="d-block w-50" src="/images/girl1.jpg" alt="First slide" height="500" width="50"/>
      <h2>{props.key}</h2>
    </div>);


};