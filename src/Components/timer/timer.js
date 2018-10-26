import React from 'react'
class Timer extends React.Component {
  state= {
    hour: 0,
    minute: 0,
    second: 0
  }
  zeroAdder = (unit) => {
    if (this.state[unit] < 10){
      return "0" + this.state[unit]
    }
    else{
      return this.state[unit]
    }
  }
  add = () => {
    let newTime= this.state.second + 1
    this.setState({second:newTime})
  }

  render(){
setTimeout(this.add,1000)
    return(
      <div>
    {this.state.hour}:{this.zeroAdder("minute")}:{this.zeroAdder("second")}
      </div>
    )

  }
}
export default Timer
