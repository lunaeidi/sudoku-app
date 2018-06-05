import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Square from'../../Components/square/square'
import NumberButtonContainer from '../../Containers/numberButtonContainer'
import * as actions from '../../actions/actions.js'
class Board extends Component {
    state = {
        selected: null,
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
        message:null
    }

    componentWillUnmount() {
        this.props.stopTimer(new Date())
        fetch('localhost:2000/scores', { //is this right?
            method: 'POST',
            body: {
              value: JSON.stringify("time"), //put saved time from redux here
              name: "name"//where will it prompt them to say name?
          },
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
                          .then(res => console.log(res) )
    }

    // componentDidMount() {  //needed so the page doesnt reload
    //   let newGrid = JSON.parse(JSON.stringify(this.props.grid)) //modifying an object within the state
    //   newGrid[0][1]=4
    //   newGrid[0][5]=6
    //   newGrid[1][0]=6
    //   newGrid[2][0]=7
    //   newGrid[3][1]=6
    //   newGrid[6][1]=9
    //   newGrid[7][1]=1
    //   newGrid[2][2]=2
    //   newGrid[3][2]=9
    //   newGrid[7][2]=3
    //   newGrid[1][3]=3
    //   newGrid[6][3]=8
    //   newGrid[8][3]=4
    //   newGrid[1][4]=2
    //   newGrid[3][4]=1
    //   newGrid[5][4]=7
    //   newGrid[7][4]=5
    //   newGrid[0][5]=6
    //   newGrid[4][5]=9
    //   newGrid[6][5]=2

    //   newGrid[1][6]=5
    //   newGrid[1][7]=9
    //   newGrid[2][7]=8
    //   newGrid[5][7]=6
    //   newGrid[5][6]=9
    //   newGrid[6][6]=1
    //   newGrid[6][8]=5
    //   newGrid[7][8]=9
    //   newGrid[8][7]=2



    //   this.setState({
    //     grid: newGrid
    //   })
    // }
    selectHandler = (event,index) => {
        this.setState({selected: index, message: null })
        console.log(index)
    }
    numberHandler= (event) => {
        /*  let numberSelected= event.target.innerHTML
           let newGrid2= JSON.parse(JSON.stringify(this.props.grid))
           let index= this.state.selected.split('')
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
    //let feedback
    doneHandler= (event) => {
        let newGrid = JSON.parse(JSON.stringify(this.props.grid))

        console.log(newGrid)
        let response
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: JSON.stringify(newGrid), // or just newGrid without JSON.stringify! // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
                          .then(res => response = res); //returns the solution! then need to compare it to the board...
        if (newGrid === response){this.setState({message:"Congratulations!"})} //NEED REDIRECT HERE !
        else {this.setState({message:"wrong. keep trying."})}
    }

    render(){
        return (
            this.props.grid === undefined ? <Redirect to="/difficulty" /> :
            <div className= "block">
                {this.props.grid
                     .map((row,indY)=>{ //indY is the index, the first row (array) has index 0....
                         return (
                             <div key={indY} className="row">
                                 {row.map((square,indX) => { //square is each square within the inner arrays
                                      let groupY= Math.floor(indY/3)
                                      let groupX = Math.floor(indX/3)
                                      let divStyle={backgroundColor:this.state.color[`${groupY}${groupX}`]}
                                      let prefilled= null
                                      if (square===0){prefilled= true}
                                      return <Square
                                                 style={divStyle}
                                                 key={`${indX} ${indY}`}
                                                 index={`${indX} ${indY}`}
                                                 square= {square}

                                                 prefilled= {prefilled}
                                                 selectHandler= {this.selectHandler}
                                             > {square} </Square>})}

                             </div>)
                     })}
                <span className="message">{this.state.message}</span>
                <button onClick={this.doneHandler}>Done</button>
                <NumberButtonContainer numberHandler={this.numberHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeGrid: (newVal, index) => dispatch(actions.changeGrid(newVal, index)),
        stopTimer: (time) => dispatch(actions.stopTimer(time))
    }
}
// it should trigger the fetch request, or they should press a button that says done (this button
//triggers the fetch request, then the fetch request triggers the rendering of the difficulty buttons .)
//see conditional fetch request example from props and state lab , for fetch request based on difficulty selected
export default connect(mapStateToProps, mapDispatchToProps)(Board)
