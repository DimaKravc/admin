import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SignIn from './signin';
import {login} from '../../actions/authActions';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SignIn {...this.props} />
        )
    }
}

SignInContainer.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null, {login})(SignInContainer)