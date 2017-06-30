import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Shops from './shops';
import {getAction} from '../../../actions/apiActions';

class ShopsContainer extends React.Component {
    render() {
        return (<Shops {...this.props}/>);
    }
}

export default connect(null, {getAction})(ShopsContainer)