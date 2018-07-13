import React from 'react'
import Contestants from './Contestants'

class MainContainer extends React.Component {
  // state = {
  //   contestants: {
  //     1: {
  //       id: 1,
  //       name: "Regina",
  //       votes: 0,
  //       image: "https://vignette.wikia.nocookie.net/villains/images/5/59/Prom_Regina.jpg/revision/latest?cb=20120125190707"
  //     },
  //     2: {
  //       id: 2,
  //       name: "Gretchen",
  //       votes: 0,
  //       image: "https://i.pinimg.com/originals/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"
  //     },
  //     3: {
  //       id: 3,
  //       name: "Janis",
  //       votes: 0,
  //       image: "http://cdn1.clevver.com/wp-content/uploads/2015/07/janis-ian-mean-girls.jpg"
  //     }
  //   }
  // }
  //
  // increaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] + 1
  //       }
  //     }
  //   })
  // }
  //
  // decreaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] - 1
  //       }
  //     }
  //   })
  // }



  render() {
    // console.log('contestants component', Contestants)
    return (
      <div>
        <Contestants
          // contestants={this.state.contestants}
          // increaseVote={this.increaseVote}
          // decreaseVote={this.decreaseVote}
        />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}

export default MainContainer
