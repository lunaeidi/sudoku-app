import React, {Component} from 'react'
import Square from'../../Components/square/square'

class Board extends Component {
  state = {
    grid:new Array(9)
      .fill(
        new Array(9).fill(0)
      ),
    color:{
      '00': '#90CAF9',
      '01': '#1DE9B6',
      '02': '#FFAB91',
      '10': '#D1C4E9',
      '11': '#FFF59D',
      '12': '#A5D6A7',
      '20': '#80CBC4',
      '21': '#F48FB1',
      '22': '#81D4FA'
    }
  }
  render(){
    return (
      <div className= "block">
        {this.state.grid
          .map((row,indY)=>{ //indY is the index, the first row (array) has index 0....
            return (
            <div key={indY} className="row">
              {row.map((square,indX) => { //square is each square within the inner arrays
                let groupY= Math.floor(indY/3)
                let groupX = Math.floor(indX/3)
                let divStyle={backgroundColor:this.state.color[`${groupY}${groupX}`]}
                return <Square style={divStyle}key={`${indX} ${indY}`} prefilled/>})}
            </div>)
          })}
      </div>
    )
  }
}
export default Board
