import React from 'react'

const Difficulty = (props) => {
return (
  <button className={props.className} onClick={(event,level)=>props.difficultySelector(event,props.level)} level={props.level}>{props.level}</button>
)
}

export default Difficulty
