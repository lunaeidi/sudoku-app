export const initGrid = (grid) => {
    return {
        type: 'NEW_BOARD',
        grid: grid,
    }
}

export const changeGrid = (newVal, index) => {
    return {
        type: 'CHANGE_GRID' ,
        newVal : parseInt(newVal, 10),
        index: index
    }
}

export const startTimer = (time) => {
    return {
        type: 'START_TIMER',
        time: time
    }
}

export const stopTimer = (time) => {
    return {
        type: 'STOP_TIMER',
        time: time
    }
}
export const storeSolution= (solution) => {
  return {
    type: 'STORE_SOLUTION',
    solution: solution
  }
}
