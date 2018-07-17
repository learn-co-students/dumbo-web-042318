import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
export { selectPlayer } from './actions'
// in a different file => import { selectPlayer } from './store'
// Exports all from export { default as Action }, * from './actions'
