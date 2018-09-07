import React, {Component} from 'react'
import Likes from '../../Components/likes'
class Scores extends Component {
  state= {
    scores_and_likes: [],
    scores: [],
    likes: []


  }
  componentDidMount() {
    fetch('http://localhost:2000/scores')
    .then(res => res.json())
    .then(json => {console.log(json)

      let newscores= [...this.state.scores] //need this because can't do this.state.scores.push
      let newlikes= [...this.state.likes]
      let newscoresandlikes= [...this.state.scores_and_likes]
      json.forEach(function(score){
        newscores.push(`${score.value} - ${score.name}`)
        newlikes.push(0)
        newscoresandlikes.push({score:`${score.value} - ${score.name}`,likes: 0 })

        }


      // element= document.createElement("li")
      //   element.innerHTML += score.value + "-" + score.name
      //   document.getElementsByTagName("ul").appendChild(element)
      )
         this.setState({scores: newscores})
        ///*this.setState({likes: newlikes})*/
        this.setState({scores_and_likes: newscoresandlikes})
    })

  }

  addLike= (event,index) => { //the event specifies which button was clicked...
    console.log(index)
    let new_s_and_l= JSON.parse(JSON.stringify(this.state.scores_and_likes))        //[index]["likes"]
    new_s_and_l[index]["likes"] = new_s_and_l[index]["likes"] + 1
    this.setState({scores_and_likes: new_s_and_l})

  }

  render (){
    return (
      <div>
        <h1>Scores</h1>
     {  // this.state.scores.map((score)=>  {return <div><p>{score}</p>
      //  </div>}
    //  )
      }
{console.log(this.state.scores_and_likes)}
      {this.state.scores_and_likes.map((s_and_l, index)=><div><p>{s_and_l.score}</p></div>)}

 {/*<Likes likeHandler={this.addLike} index={index} like={s_and_l.likes}>{s_and_l.likes}</Likes>*/}
      </div>
    )
  }
}
export default Scores
