import React from "react";

export const SaveBtn = props =>
  <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn">
    {props.children}
  </button>;
