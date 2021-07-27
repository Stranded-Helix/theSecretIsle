import React from "react";
import './style.css'

function Container(props) {
  return <div className="w-75 d-flex flex-column justify-content-center align-middle text-center" style={props.style}>{props.children}</div>;
}

export default Container;