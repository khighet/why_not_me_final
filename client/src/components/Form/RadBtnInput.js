import React from "react";

export const RadBtnInput = props =>
  <div className="form-check">
    <input {...props} type={props.type} className="form-control-sm " placeholder={props.placeholder} style={{fontSize: 15}}/><span style={{fontSize: 25}}>{props.value}</span>
  </div>;
