import React from 'react'

const Difficulty = ({difficultySelector,level}) => {
return (
  <button onClick={difficultySelector} level={level}>{level}</button>
)
}

export default Difficulty
