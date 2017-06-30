import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Operations from './operations';
import {getAction} from '../../../actions/apiActions';

class OperationsContainer extends React.Component {
    render() {
        return (<Operations {...this.props}/>);
    }
}

export default connect(null, {getAction})(OperationsContainer)