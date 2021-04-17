import { combineReducers } from 'redux';
import testReducer from './test';
import authReducer from './auth';

export default combineReducers({
  test: testReducer,
  auth: authReducer
})