import {SudokuGenerator} from 'js-sudoku-generator'
import './difficultyContainer.css'
import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Difficulty from '../../Components/difficulty'
import  * as actions from '../../actions/actions.js'

class DifficultyContainer extends Component {
    state= {
        levels: ["easy","medium","hard"],
        redirected:false
    }

    difficultySelector= async (event,level) => {
        console.log(level)
        this.setState({selected:level})
        console.log("solution", SudokuGenerator.generate(1))

        let generate= await SudokuGenerator.generate(1)
        this.props.solution(generate)
        let getSheets = await SudokuGenerator.generatedBoards[0];
        console.log(generate)
      //  console.log(SudokuGenerator.loadBoard(generate.signature))
      let loadBoard= await SudokuGenerator.loadBoard(getSheets.signature)
        let board= null

        if (level=="easy"){board= await getSheets.getSheet(0)}
        else if (level=="medium"){board= await getSheets.getSheet(1)}
        else {board= await getSheets.getSheet(2)}
        //console.log(board)
        // console.log('https://sugoku.herokuapp.com/board?difficulty=' + level)
        // fetch('https://sugoku.herokuapp.com/board?difficulty=' + level)
        //     .then(res => res.json())
        //     .then(json => {
        //         this.props.startTimer(new Date())
        //         this.props.initBoard(json.board)
        //         this.setState({redirected: true})
        //     })
        this.props.startTimer(new Date())
               board=  await board.map((row)=>{
          return row.map((square)=>{
            if (square === ""){
              return 0
            } else {
              return square
            }
          })
        })
        console.log(board)
          await this.props.initBoard(board) //pass in the result of it here
      this.setState({redirected: true})
        };

    render(){
        return (

                <div className="difficulty">
                <div className="sudoku"><h1>SUDOKU</h1></div>
                <div classNa="buttons">
                {this.state.levels.map(level =>

                     <Difficulty difficultySelector= {this.difficultySelector} level={level}>{level}</Difficulty>

                )}
            {this.state.redirected ? <Redirect to='/'/> : null}
            </div>
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
        startTimer: (time) => dispatch(actions.startTimer(time)),
        solution: (solution) => dispatch(actions.storeSolution(solution))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyContainer)
