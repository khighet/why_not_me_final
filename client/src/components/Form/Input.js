import React from "react";

export const Input = props =>
  <div className="form-group">
    <input {...props} type={props.type} className="form-control" placeholder={props.placeholder} style={{fontSize: 25}}/>
  </div>;
