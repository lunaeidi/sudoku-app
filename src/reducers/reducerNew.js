const initialState = {
    grid: [],
    startTime: null,
    stopTime: null
}

const reducer = (state= {initialState}, action) => { //should only changeState be here and the rest go in createStore.js ?
    switch (action.type) {
    case 'NEW_BOARD':
        return {
            ...state,
            grid: action.grid
        }
    case 'CHANGE_GRID':
        const newGrid = JSON.parse(JSON.stringify(state.grid))
        const index = action.index.split(' ')
        newGrid[index[1]][index[0]] = action.newVal
        return {
            ...state,
            grid: newGrid
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
