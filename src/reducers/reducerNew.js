const initialState = {
    grid: [],
    startTime: null,
    stopTime: null,
    s_and_l: []
}

const reducer = (state= {initialState}, action) => {
    switch (action.type) {
    case 'NEW_BOARD':
        return {
            ...state,
            grid: action.grid
        }
    case 'CHANGE_GRID':
        const newGrid = JSON.parse(JSON.stringify(state.grid)) //need newGrid because
        const index = action.index.split(' ')
        newGrid[index[1]][index[0]] = action.newVal
        return {
            ...state,
            grid: newGrid
        }
    case 'INIT_LIKE' :
        let init_new_s_and_l=JSON.parse(JSON.stringify(action.s_and_l))
        return {
          ...state,
          s_and_l: init_new_s_and_l
        }
    case 'LIKE' :
      let new_s_and_l= JSON.parse(JSON.stringify(state.s_and_l))
      const like_index= action.index
      new_s_and_l[like_index]["likes"]=new_s_and_l[like_index]["likes"] + 1
        return {
          ...state,
          s_and_l: new_s_and_l
        }
    case 'START_TIMER' :
        return {
            ...state,
            startTime: action.time
        }
    case 'STOP_TIMER' :
        return {
            ...state,
            stopTime: action.time
        }
    default:
        return state;
    }
}

export default reducer
