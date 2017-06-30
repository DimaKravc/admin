import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ModMerchants from './ModMerchants';
import {getAction} from '../../actions/apiActions';

class ModMerchantsContainer extends React.Component {
    render() {
        return (
            <ModMerchants {...this.props} />
        )
    }
}

ModMerchantsContainer.PropTypes = {
    getAction: PropTypes.func.isRequired
};

export default connect(null, {getAction})(ModMerchantsContainer)