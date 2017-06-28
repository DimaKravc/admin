import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SignUp from './signup';
import {isUserExists, userSignUpRequest} from '../../actions/signupActions';

class SignUpContainer extends React.Component {
    render() {
        return (
            <SignUp {...this.props}/>
        )
    }
}

SignUpContainer.propTypes = {
    isUserExists: PropTypes.func.isRequired,
    userSignUpRequest: PropTypes.func.isRequired
};

export default connect(null, {isUserExists, userSignUpRequest})(SignUpContainer);