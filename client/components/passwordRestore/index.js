import React from 'react';

import PasswordRestore from './PasswordRestore';

class PasswordRestoreContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<PasswordRestore {...this.state}/>)
    }
}

export default PasswordRestoreContainer;