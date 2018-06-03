//when click button, load it in the URL of the fetch request , with query

import React, {Component} from 'react'
import { connect } from 'react-redux'
import Difficulty from '../../Components/difficulty'
class DifficultyContainer extends Component {
  state= {levels: ["easy","medium","hard"]  }
  //or in function, call different fetch request based on level selected
  //1) person clicks button 2) it makes a fetch request with that level passed in, 3)render board component
  //do i need componentDidMount?
difficultySelector= (event,level) => {
  console.log(level) //level is undefined
  this.setState({selected:level})
console.log('https://sugoku.herokuapp.com/board?difficulty=' + level)
  fetch('https://sugoku.herokuapp.com/board?difficulty=' + level). //need redux store forsending this to board?
    then(res => res.json()).
    then(json => console.log(json))
    // let store = createStore(changeState);
    // store.dispatch({ grid:json });
//   dispatch({ grid: json }); but would need to move the grid from the board.js into redux too

};


  render(){
    return (
      <div className="difficulty">
      {this.state.levels.map(level =>

     <Difficulty difficultySelector= {this.difficultySelector} level={level}>{level}</Difficulty>

  )}
  </div>
    )
}
}
const mapStateToProps = (state) => {
  return { grid: state.grid };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initStore : () => dispatch()    
  }
}

export default connect(mapStateToProps)(DifficultyContainer)
