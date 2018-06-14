import React, {Component } from 'react'

class Likes extends Component {
  render(){
        return (

      <button onClick={(event,index) => this.props.likeHandler(event,this.props.index)}>{this.props.like}</button>
    )
  }
}
export default Likes
