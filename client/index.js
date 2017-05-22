import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        document.getElementById('app')
    )
};

renderApp();