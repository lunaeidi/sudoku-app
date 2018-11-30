import React from 'react'
class Timer extends React.Component {
  state= {
    hour: 0,
    minute: 0,
    second: 0
  }
  componentDidMount(){
    this.time()
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
    this.time()
    this.setState({second:newTime})
  }
time= () => {
  setTimeout(this.add,1000)
}
  render(){

    return(
      <div>
    {this.state.hour}:{this.zeroAdder("minute")}:{this.zeroAdder("second")}
      </div>
    )

  }
}
export default Timer
