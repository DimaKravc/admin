import React from 'react';

import MerchantsModeration from '../presentational/MerchantsModeration';

export default class MerchantsModerationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <MerchantsModeration {...this.state} />
        )
    }
}