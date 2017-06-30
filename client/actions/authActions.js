import axios from 'axios';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import {setCurrentUser} from './setUser';

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function login(userData) {
    return dispatch => {
        return axios
            .post('/api/auth', userData)
            .then(res => {
                const token = JSON
                    .parse(res.data)
                    .token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            })
    }
}