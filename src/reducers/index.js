import { combineReducers } from 'redux';
import sessionReducer from './session';
import postReducer from './post'

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  postReducer: postReducer
});

export default rootReducer;