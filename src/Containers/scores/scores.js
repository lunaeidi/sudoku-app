import React, {Component} from 'react'

class Scores extends Component {
  state= {
    scores: []
  }
  componentDidMount() {
    fetch('http://localhost:2000/scores')
    .then(res => res.json())
    .then(json => {console.log(json)
      debugger
      json.forEach(function(score){
        this.setState({scores: this.state.scores.push(`${score.value} - ${score.name}`)})

      }

      // element= document.createElement("li")
      //   element.innerHTML += score.value + "-" + score.name
      //   document.getElementsByTagName("ul").appendChild(element)
      )}
    )
  }
  render (){
    return (
      <div>
        <h1>Scores</h1>
        {this.state.scores}

      </div>
    )
  }
}
export default Scores
