import gamesData from '../gamesData'
import { SELECT_PLAYER } from './actions'

const initialState = {
  teams: gamesData.teams, // *
  selectedPlayer: {} // *
}

export default function reducer (state = initialState, action) {
  switch (action.type){
  case SELECT_PLAYER:
    return {...state, selectedPlayer: action.player}
  default:
    return state
  }
}
