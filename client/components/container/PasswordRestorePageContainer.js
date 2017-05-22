import React from 'react';

import PasswordRestorePage from '../presentational/PasswordRestorePage';

export default class SignupPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ''
        };
    }
    
    render() {
        return (
            <PasswordRestorePage {...this.state} />
        )
    }
}