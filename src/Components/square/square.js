import React from 'react'
import './square.css'


const square = (props) => {
let clas = "square"
if (props.index === props.selected) {
  clas = "square selected"
}
return (
  <div className={clas}  style={props.style} onClick={(event,index) => props.selectHandler(event,props.index)}>
   {props.square}
  </div>
)
}

export default square
