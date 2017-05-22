import React from 'react';

import SingIn from '../presentational/SingIn';

export default class SignInContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    }
    
    render() {
        return (
            <SingIn {...this.state} />
        )
    }
}