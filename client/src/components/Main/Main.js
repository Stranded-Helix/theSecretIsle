import React from 'react';
// import background from "./Pirate Island.jpg"
import "./style.css";

export default function Main(props) {
  return(
    <main className="background">
        {props.children}
    </main>
  )
}



