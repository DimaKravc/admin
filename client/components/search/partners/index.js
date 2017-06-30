import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Partners from './partners';
import {getAction} from '../../../actions/apiActions';

class PartnersContainer extends React.Component {
    render() {
        return (<Partners {...this.props}/>);
    }
}

export default connect(null, {getAction})(PartnersContainer)