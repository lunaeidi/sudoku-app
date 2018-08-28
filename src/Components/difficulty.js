import React from 'react'
import './difficulty.css'
const Difficulty = (props) => {
return (

  <button onClick={(event,level)=>props.difficultySelector(event,props.level)} level={props.level}>{props.level}</button>

)
}

export default Difficulty
