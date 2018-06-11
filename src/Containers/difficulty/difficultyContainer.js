

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
                <div className="difficulty">
                {this.state.levels.map(level =>

                     <Difficulty difficultySelector= {this.difficultySelector} level={level}>{level}</Difficulty>

                )}
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
