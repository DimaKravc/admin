import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import jwtDecode from 'jwt-decode';

import 'react-select/dist/react-select.css';

import setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/setUser';

const store = configureStore();

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.getElementById('app')
    )
};

renderApp();