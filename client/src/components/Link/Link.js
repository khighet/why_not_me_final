import React from "react";

export const Link = props =>
 <a href={props.link}><span style={{fontSize: 25}}>{props.children}</span></a>;