import React from 'react';

import SingUp from '../presentational/SingUp';

export default class SignUpContainer extends React.Component {
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
            <SingUp {...this.state} />
        )
    }
}