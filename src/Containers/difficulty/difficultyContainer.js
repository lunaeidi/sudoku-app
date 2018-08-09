import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Difficulty from '../../Components/difficulty'
import  * as actions from '../../actions/actions.js'
import background from '../../assets/horizon-ocean-salt-water-7321.jpg'
import './difficulty.css'

class DifficultyContainer extends Component {
  state= {
    levels: ["easy","medium","hard"],
    redirected:false
  }

  difficultySelector= (event,level) => {
    console.log(level)
    this.setState({selected:level})
    console.log('https://sugoku.herokuapp.com/board?difficulty=' + level)
    fetch('https://sugoku.herokuapp.com/board?difficulty=' + level)
      .then(res => res.json())
      .then(json => {
        this.props.startTimer(new Date())
        this.props.initBoard(json.board)
        this.setState({redirected: true})
      })
  };

  render(){
    return (
      <div className="difficulty-container">
        <img src={background} className="difficulty-background" alt="Water background"/>
        <div className="difficulty-text difficulty-title">
          Sudoku
        </div>
        <div>
          {this.state.levels
            .map(level =>
                 <Difficulty key={level} className='difficulty-button' difficultySelector= {this.difficultySelector} level={level}>{level}</Difficulty>
                )}
        </div>
      {this.state.redirected ? <Redirect to='/'/> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { grid: state.grid };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initBoard: (grid) => dispatch(actions.initGrid(grid)),
    startTimer: (time) => dispatch(actions.startTimer(time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyContainer)
