import React from 'react'
import { connect } from 'react-redux'
import { selectPlayer } from '../store'

const Player = ({ player, selectAPlayer }) => {
  return (
    <div onClick={() => selectAPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

// doesn't need mapStateToProps
const mapDispatchToProps = (dispatch) => ({
  selectAPlayer(player) {
    dispatch(selectPlayer(player))
    //same as dispatch({type: 'SELECT_PLAYER', player})
  }
  // deletePlayer(player) {
  //   dispatch(someFunc(player))
  // }
})

export default connect(null, mapDispatchToProps)(Player)
