import React, {Component} from 'react'

class Scores extends Component {
  state= {
    scores: []
  }
  componentDidMount() {
    fetch('http://localhost:2000/scores')
    .then(res => res.json())
    .then(json => {console.log(json)
    
      let newscores= [...this.state.scores]
      json.forEach(function(score){
        newscores.push(`${score.value} - ${score.name}`)
        }


      // element= document.createElement("li")
      //   element.innerHTML += score.value + "-" + score.name
      //   document.getElementsByTagName("ul").appendChild(element)
      )
        this.setState({scores: newscores})
    })
  }
  render (){
    return (
      <div>
        <h1>Scores</h1>
        {this.state.scores.map((score)=><p>{score}</p>)}

      </div>
    )
  }
}
export default Scores
