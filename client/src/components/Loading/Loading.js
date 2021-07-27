import React, {useEffect} from 'react';
import "./style.css";
import CodeBoat from '../../images/Code_Boat_1.png'



function Loading(props) {
  useEffect(() => {
    setInterval(() =>{
      window.location.href = "/Story";
    }, 5000)
  })
  return(
    <div className="">
        <img class="spinner-grow" role="status" src={CodeBoat} />
    </div>
  )
}

export default Loading
