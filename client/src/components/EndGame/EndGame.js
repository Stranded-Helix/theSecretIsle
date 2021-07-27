import React from 'react';
import "./style.css";
import { useHistory } from "react-router-dom";

export default function EndGame(props) {

    const history = useHistory()
    const routeChange = () =>{ 
        let path = `loading`; 
        history.push(path);
    }

  return(
    <div className="d-flex flex-column justify-content-center align-middle text-center">
        <a className="mainFont">Game Over</a>
        <p className="endText">________________________________________________________</p>
        <p className="endText">(story resolution text below)</p>
        <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" id="login-btn" onClick={routeChange} className="btn btn-light">Retry?</button>
        </div>
        {props.children}
    </div>
  )
}