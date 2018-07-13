import React from 'react'
import ContestantCard from './ContestantCard'

import { connect } from 'react-redux'


function Contestants(props) {
  // console.log('contestants props', props)
  const mapContestants = () => {
    let contestantArray = Object.values(props.contestants)
    let contestantCards = contestantArray.map(contestant => {
      return (<ContestantCard key={contestant.name} contestant={
        contestant
      }

      />
      )
    })
    return contestantCards
  }

  return (
    <div>
      <div className="container">
        {mapContestants()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contestants: state.contestants
  }
}

export default connect(mapStateToProps)(Contestants)
