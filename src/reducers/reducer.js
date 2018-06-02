function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
};

function changeState(state= {grid:null}, action){ //should only changeState be here and the rest go in createStore.js ? 
  switch (action.type) {
    case 'NEW_BOARD':
      return {grid: res.board};

    default:
      return state;
  }
}



function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState.count;
};

dispatch({ type: '@@INIT' })
