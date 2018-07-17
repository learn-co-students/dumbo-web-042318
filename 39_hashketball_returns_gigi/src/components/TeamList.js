import React from 'react'
import { connect } from 'react-redux'
import Team from './Team'

const TeamList = ({ teams, selectPlayer }) => {
  console.log(teams, selectPlayer);
  const renderedTeams = teams.map(team => {
    return <Team key={team.id} team={team} selectPlayer={selectPlayer} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   teams: state.teams
// })

const mapStateToProps = ({ teams }) => ({ teams })

export default connect(mapStateToProps)(TeamList)
