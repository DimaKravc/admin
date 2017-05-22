import React from 'react';

import SideMenu from '../presentational/SideMenu';

export default class SignupPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <SideMenu {...this.state} />
        )
    }
}