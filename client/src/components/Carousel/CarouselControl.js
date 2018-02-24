import React from "react";

import { Modal,ModalBtn}  from "../../components/Modal";

export const  CarouselControl = ( props ) => {
    return(
     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"  data-interval="false">
        <div className="carousel-inner" >
          
            {props.children}
          
       </div>

    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
                    

    </div>

    )
  }// end 