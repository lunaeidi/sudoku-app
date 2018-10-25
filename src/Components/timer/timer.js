import React from 'react'
class Timer extends React.Component {
  state= {
    time: 0
  }
  add = () => {
    let newTime= this.state.time + 1
    this.setState({time:newTime})
  }

  render(){
setTimeout(this.add,1000)
    return(
      <div>
    {this.state.time}
      </div>
    )

  }
}
export default Timer
