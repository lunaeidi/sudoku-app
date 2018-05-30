import React from 'react'

const NumberButton = ({value}) => {
return (
  <div className="number_button" /*onClick={props.clicked}*/>
  {/*props.children... ?? */}
  <button>{value}</button>
  </div>
)
}

export default NumberButton
