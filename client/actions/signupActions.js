import axios from 'axios';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import {setCurrentUser} from './setUser';

export function userSignUpRequest(userData) {
    return dispatch => {
        return axios.post('/api/register', userData).then(res=> {
            const token = JSON.parse(res.data).token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        })
    }
}

export function isUserExists(identifier) {
    return () => {
        return axios.get(`/api/register/${identifier}`);
    }
}