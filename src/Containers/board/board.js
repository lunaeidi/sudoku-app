import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Square from'../../Components/square/square'
import NumberButtonContainer from '../../Containers/numberButtonContainer'
import * as actions from '../../actions/actions.js'
import './board.css'
class Board extends Component {
    state = {
        selected: null,
        name:null,
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
        },
        message:null,
        completed:false,
        submittedScore:false

    }
    // componentDidMount(){
    //   let response= this.props.solution[0].board
    //   console.log(response)
    // }
/* completed:set to true for testing purposes, usually would be false */
    nameHandler = () => {

const postBody= {

    value: this.props.stopTime - this.props.startTime,
    name: this.state.name

}

        fetch('http://localhost:2000/scores', {

            method: 'POST',
            body: JSON.stringify(postBody),

            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
                          .then(res => console.log(res),this.setState({submittedScore:true}) )
    }
    nameValueHandler = (event) => {
      this.setState({name:event.target.value})
    }


    selectHandler = (event,index) => {
        this.setState({selected: index, message: null })
        console.log(index)
    }
    numberHandler= (event) => {
        /*  let numberSelected= event.target.innerHTML
           let newGrid2= JSON.parse(JSON.stringify(this.props.grid))
           let index= this.state.selecte
           d.split('')
           console.log(index)
           let y= index[0]
           let x=index[1]
           newGrid2[y][x]=numberSelected
           console.log(newGrid2[y][x])
           this.setState({grid:newGrid2}) */

        const newVal = event.target.innerHTML
        if (this.state.selected !== null){
            this.props.changeGrid(newVal, this.state.selected)
        } else {
            this.setState({
                message:'No number selected!'
            })
        }
   //     let index = this.state.selected.split(' ')
   //     let newGrid = JSON.parse(JSON.stringify(this.props.grid))
   //     newGrid[index[0]][index[1]] = newVal
   //     this.setState({
   //         grid: newGrid
   //     })

    }
    doneHandler= (event) => {
      console.log(this.props.grid)
        let newGrid = JSON.parse(JSON.stringify(this.props.grid))
        console.log(newGrid)
console.log(JSON.stringify(this.props.grid))
console.log(JSON.stringify(newGrid))
        let response= this.props.solution[0].board
        console.log(response)
        console.log(JSON.parse(JSON.stringify(response))) //this doesnt change it.
        // fetch('https://sugoku.herokuapp.com/solve', {
        //     method: 'POST',
        //     body: JSON.stringify(newGrid), // or just newGrid without JSON.stringify! // data can be `string` or {object}!
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => res.json())
        //                   .then(res => response = res); //returns the solution! then need to compare it to the board...
         if (newGrid === response)
        {this.setState({message:"Congratulations!", completed:true})
        this.props.stopTimer(new Date())} //NEED REDIRECT HERE !
         else {this.setState({message:"wrong. keep trying."})}


    }

    render(){
        return (
          this.props.grid === undefined ? <Redirect to="/difficulty" /> :
            <div className= "block">
            {this.state.submittedScore === true ? <Redirect to= "/scores"/> : null}

                {this.props.grid
                     .map((row,indY)=>{ //indY is the index, the first row (array) has index 0....
                         return (
                             <div key={indY} className="row">
                                 {row.map((square,indX) => { //square is each square within the inner arrays
                                      let groupY= Math.floor(indY/3)
                                      let groupX = Math.floor(indX/3)
                                      let divStyle={backgroundColor:this.state.color[`${groupY}${groupX}`]}


                                      return <Square
                                                 style={divStyle}
                                                 key={`${indX} ${indY}`}
                                                 index={`${indX} ${indY}`}
                                                 square= {square}
                                                 selected = {this.state.selected}
                                                 selectHandler= {this.selectHandler}

                                             > {square} </Square>})}

                             </div>)
                     })}
                <div className="message">{this.state.message}</div>
                {this.state.completed===true?
                  <p>Your score: {this.props.stopTime - this.props.startTime} miliseconds.<br/>
                  If you would like to save your score, enter your name and press submit.<br/>
                  <input type="text" onChange={this.nameValueHandler}/>
                  <button onClick={this.nameHandler}>Submit</button></p> : null}



                <NumberButtonContainer numberHandler={this.numberHandler} />

                <button className="done"onClick={this.doneHandler}>Done</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        startTime: state.startTime,
        stopTime: state.stopTime,
        solution: state.solution

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeGrid: (newVal, index) => dispatch(actions.changeGrid(newVal, index)),
        stopTimer: (time) => dispatch(actions.stopTimer(time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
