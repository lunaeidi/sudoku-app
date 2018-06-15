export const initGrid = (grid) => {
    return {
        type: 'NEW_BOARD',
        grid: grid,
    }
}

export const changeGrid = (newVal, index) => {
    return {
        type: 'CHANGE_GRID' ,
        newVal : newVal,
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


export const addLike = (index) => {
  return (dispatch,getState) => {
    let id1= index + 1
    const postBody= {
          likes: getState().s_and_l[index]["likes"] //+ 1
    }
    const JSONpart = {
        method: 'PATCH',
        body: JSON.stringify(postBody),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    return fetch('http://localhost:2000/scores/'+id1, JSONpart).then(res => res.json())
                      .then(res => {dispatch({ type: 'LIKE', index})})
  }
}
// export const addLike = (index) => {
//   return {
//     type: 'LIKE',
//
//     index: index
//
//   }
// }
export const initLike = (s_and_l) => {
  return {
    type: 'INIT_LIKE',
    s_and_l: s_and_l
  }

}
