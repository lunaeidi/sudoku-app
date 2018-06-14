import React, {Component} from 'react'
import Likes from '../../Components/likes'
import { connect } from 'react-redux'
import  * as actions from '../../actions/actions.js'
class Scores extends Component {
  // state= {
  //   scores_and_likes: [],
  //   scores: [],
  //   likes: []
  //
  //
  // }

  componentDidMount() {
    let props_bind= this.props// where can i access the value of 'this.props' to pass into bind ? here
    fetch('http://localhost:2000/scores')
    .then(res => res.json())
    .then(json => {console.log(json)
      //
      // let newscores= [...this.state.scores] //need this because can't do this.state.scores.push
      // let newlikes= [...this.state.likes]
      // let newscoresandlikes= [...this.state.scores_and_likes]

      let newscoresandlikes= []
          json.forEach((score)=>{
            console.log(props_bind) //its accessible here !
          newscoresandlikes.push({score:`${score.value} - ${score.name}`,likes: 0 })
          } )
          this.props.initLike(newscoresandlikes)
            console.log(this.props.s_and_l)
    })

  }

  addLike= (event,index) => {
    // console.log(index)
    // let likes= this.state.scores_and_likes[index]["likes"]
    // this.setState({scores_and_likes:likes + 1})
    console.log(index)

this.props.addLike(index)

  }

  render (){
    return (
      <div>
        <h1>Scores</h1>
    {console.log(this.props.s_and_l)}

      {this.props.s_and_l? this.props.s_and_l.map((s_and_l, index)=><div><p>{s_and_l.score}</p><Likes likeHandler={this.addLike} index={index} like={s_and_l.likes}>{s_and_l.likes}</Likes></div>) : null}
        </div>



    )
  }
}

const mapStateToProps = (state) => {
    return { s_and_l: state.s_and_l };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (index) => dispatch(actions.addLike(index)),
        initLike: (s_and_l) => dispatch(actions.initLike(s_and_l))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores)
