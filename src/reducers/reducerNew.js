const initialState = {
  grid: []
}

const reducer = (state= {initialState}, action) => { //should only changeState be here and the rest go in createStore.js ?
  switch (action.type) {
    case 'NEW_BOARD':
      return {
        ...state,
        grid: action.grid
      }
    default:
      return state;
  }
}

export default reducer
