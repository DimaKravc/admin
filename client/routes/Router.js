import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

export default class extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Routes history={browserHistory} />
            </Router>
        )
    }
}