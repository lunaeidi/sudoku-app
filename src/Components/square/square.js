import React from 'react'
import './square.css'
const square = (props) => {
return (
  <div className="square" style={props.style} onClick={(event,index) => props.selectHandler(event,props.index)}>
   {props.square}
  </div>
)
}

export default square
