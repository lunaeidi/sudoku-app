import React, {Component} from 'react'
import Square from'../../Components/square/square'

class Board extends Component {
  state = {
    grid:new Array(9)
      .fill(
        new Array(9).fill(0)
      )
  }
  render(){
    return (
      <div>
        {this.state.grid
          .map(row=>{
            return (
            <div className="row">
              {row.map(square => <Square
                pre-filled />)}
            </div>)
          })}
      </div>
    )
  }
}
export default Board
