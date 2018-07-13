const defaultState = {
  contestants: {
    1: {
      id: 1,
      name: "Regina",
      votes: 0,
      image: "https://vignette.wikia.nocookie.net/villains/images/5/59/Prom_Regina.jpg/revision/latest?cb=20120125190707"
    },
    2: {
      id: 2,
      name: "Gretchen",
      votes: 0,
      image: "https://i.pinimg.com/originals/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"
    },
    3: {
      id: 3,
      name: "Janis",
      votes: 0,
      image: "http://cdn1.clevver.com/wp-content/uploads/2015/07/janis-ian-mean-girls.jpg"
    }
  },
  dogs: 'dogs'
}

const reducer = (state = defaultState, action) => {

  if (action.type === 'INCREASE_VOTE'){
      return {
        contestants: {
          ...state.contestants,
          [action.payload.id]: {
            ...state.contestants[action.payload.id],
            votes: state.contestants[action.payload.id]["votes"] + 1
          }
        }
      }
  } else if (action.type === 'DECREASE_VOTE') {
    return {
      contestants: {
        ...state.contestants,
        [action.payload.id]: {
          ...state.contestants[action.payload.id],
          votes: state.contestants[action.payload.id]["votes"] - 1
        }
      }
    }
  } else {
    return state
  }

}


export default reducer
