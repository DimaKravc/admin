import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NewMerchants from './NewMerchants';
import {getAction} from '../../actions/apiActions';

class NewMerchantsContainer extends React.Component {
    render() {
        return (
            <NewMerchants {...this.props} />
        )
    }
}

NewMerchantsContainer.PropTypes = {
    getAction: PropTypes.func.isRequired
};

export default connect(null, {getAction})(NewMerchantsContainer)