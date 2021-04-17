import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS
} from '../constants/auth';

const initialState = {
  user: null,
  isAuthenticated: Boolean(localStorage.getItem('jwt-token')),
  error: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: false
      }
    case AUTHENTICATION_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('jwt-token')
      return {
        ...state,
        error: false
      }
    default:
      return state;
  }
}

export default authReducer;