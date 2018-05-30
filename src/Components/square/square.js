import React from 'react'
import './square.css'
const square = (props) => {
return (
  <div className="square" style={props.style} onClick={props.clicked}>
   {props.children} 
  </div>
)
}

export default square
