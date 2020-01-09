import axios from 'axios'
import {
    USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL
} from '../actions/types'
import { returnErrors } from './errorActions';


export const loadUser = () => (dispatch, getState) => {

    //user loading
    dispatch({ type: USER_LOADING });

    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/auth/user/', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}   