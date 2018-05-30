import React from 'react'

const numberButton = (props) => {
return (
  <div className="number_button" onClick={props.clicked}>
   {props.children}
  </div>
)
}

export default numberButton
