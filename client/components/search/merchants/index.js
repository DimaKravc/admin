import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Merchants from './merchants';
import {getAction} from '../../../actions/apiActions';

class MerchantsContainer extends React.Component {
    render() {
        return (<Merchants {...this.props}/>);
    }
}

export default connect(null, {getAction})(MerchantsContainer)