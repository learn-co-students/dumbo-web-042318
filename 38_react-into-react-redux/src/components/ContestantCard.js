import React from 'react'
import { increaseVote, decreaseVote } from '../actions.js'
import { connect } from 'react-redux'

function ContestantCard(props) {
  console.log('contestant props', props)

  const { contestant } = props

  const handleIncreaseVote = () => {
    props.increaseVote(contestant.id)
  }
  const handleDecreaseVote = () => {
    props.decreaseVote(contestant.id)
  }

  const swapImage = () => {
    if (contestant.votes > 4) {
      return "https://data.whicdn.com/images/173918733/large.jpg"
    } else if (contestant.votes < -4) {
      return "https://media2.giphy.com/media/sw7KSBKL3yme4/480w_s.jpg"
        } else {
      return contestant.image
    }
  }

  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img alt={contestant.name} src={swapImage()} />
      <br />
      <button onClick={handleIncreaseVote}>
        Vote
      </button>
      <button onClick={handleDecreaseVote}>
        Unvote
      </button>

    </div>
  )
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseVote: (id) => dispatch(increaseVote(id)),
//     decreaseVote: (id) => dispatch(decreaseVote(id))
//   }
// }

export default connect(null, { increaseVote, decreaseVote })(ContestantCard)
