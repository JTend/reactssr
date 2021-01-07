const initialState = { User : 'visitor'};

// ACTIONS
export const updateUser = user => ({ type : 'UPDATE_USER', payload : user });

export const resetUser = () => ({ type : 'RESET_USER' });

// REDUCER
export const reduceUser = (state = initialState, action) => {
  switch(action.type) {
    case('UPDATE_USER'): return {
      ...state,
      User : action.payload
    }
    case('RESET_USER'): return {
      ...state,
      User : initialState.User
    }
    default: return state;
  }
}

// SELECTOR
export const selectUser = state => state.reduceUser.User;