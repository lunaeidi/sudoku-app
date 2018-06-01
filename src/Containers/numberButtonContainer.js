 import React, {Component} from 'react'
import NumberButton from '../Components/numberButton'
class NumberButtonContainer extends Component {
  state={
    numbers: [1,2,3,4,5,6,7,8,9]
  }
  render (){
    return (
      <div>
      {this.state.numbers.map(number =>
        <NumberButton
        numberHandler= {this.props.numberHandler}
        value= {number}
        > {number}
        </NumberButton>
      )}


      {/*<NumberButton>1</NumberButton>
        <NumberButton>2</NumberButton>
        <NumberButton>3</NumberButton>
        <NumberButton></NumberButton>
        <NumberButton></NumberButton>
        <NumberButton></NumberButton>
        <NumberButton></NumberButton>
        <NumberButton></NumberButton>
        <NumberButton></NumberButton>*/}
      </div>
    )
  }
}
export default NumberButtonContainer
