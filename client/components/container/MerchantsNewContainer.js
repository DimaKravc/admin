import React from 'react';

import MerchantsNew from '../presentational/MerchantsNew';

export default class MerchantModerationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <MerchantsNew {...this.state} />
        )
    }
}