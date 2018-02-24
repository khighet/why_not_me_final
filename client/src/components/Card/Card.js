import React from "react";

const Card = ( props ) =>
<div className="card">
  <div className="card-block">
  <h2>{props.cardHeader}</h2>
  <br/>
  <h4>{props.cardBody}</h4>
  </div>
</div>



export default Card;
