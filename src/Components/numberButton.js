import React from 'react'

const NumberButton = ({value, numberHandler}) => {
return (
  <div className="number_button" /*onClick={props.clicked}*/>
  {/*props.children... ?? */}
  <button onClick={numberHandler}>{value}</button>
  </div>
)
}

export default NumberButton
