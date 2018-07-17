// Action Types
export const SELECT_PLAYER = 'SELECT_PLAYER'

// Action Creators
export const selectPlayer = (player) => ({
  type: SELECT_PLAYER,
  player: player
})
