const initialState = { Lighted : false };

// ACTIONS
export const toogleLight = () => ({ type : 'TOOGLE_LIGHT' });

// REDUCER
export const reduceLight = (state = initialState, action) => {
  switch(action.type) {
    case('TOOGLE_LIGHT'): return {
      ...state,
      Lighted : !state.Lighted
    }
    default: return state;
  }
}