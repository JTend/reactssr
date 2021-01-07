const initialBoard = new Array(9).fill(null);
const initialState = { History : [], Board : initialBoard, xPlays : true };
// ACTIONS
export const playSquare = id => ({ type : 'PLAY_SQUARE', payload : id });
export const rollBack = id => ({ type : 'ROLL_BACK', payload : id });
// REDUCER
export const reduceTTT = (state = initialState, action) => {
  let history, board, xplays;
  switch(action.type) {
    case 'PLAY_SQUARE' : 
      history = state.History.slice();
      history.push({ Board : state.Board, xPlays : state.xPlays });
      board = state.Board.slice();
      board[action.payload] = state.xPlays ? 'X' : 'O';
      return {
        ...state,
        History : history,
        Board : board,
        xPlays : !state.xPlays
      }
    case 'ROLL_BACK' :
      board = state.History[action.payload].Board;
      xplays = state.History[action.payload].xPlays;
      history = state.History.slice(0, action.payload);
      return {
        ...state,
        History : history,
        Board : board,
        xPlays : xplays
      }
    default : return state;
  }
}

