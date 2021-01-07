import { createStore, combineReducers } from 'redux';
import { reduceUser } from './session';
import { reduceLight } from './light';
import { reduceTTT } from './tictactoe';

const reducers = combineReducers({
  reduceUser,
  reduceLight,
  reduceTTT
});
 
const store = createStore(reducers);

export default store;