import { combineReducers } from 'redux';
import authenticationReducers from './authentication';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  authenticated: authenticationReducers
});

export default rootReducer;
