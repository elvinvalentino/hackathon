import axios from '../../axios';
import { AUTHENTICATION_FAILED, AUTHENTICATION_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED } from '../constants/auth';

export const login = body => async dispatch => {
  try {
    const { data } = await axios.post('/api/login', body);
    localStorage.setItem('jwt-token', data.token)
    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({ type: AUTHENTICATION_FAILED })
  }
}

export const register = body => async dispatch => {
  try {
    await axios.post('/api/register', body);
    dispatch({
      type: REGISTER_SUCCESS
    })
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED
    })
  }
}