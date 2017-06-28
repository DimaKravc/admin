import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Content from '../presentational/Content';

class ContentContainer extends React.Component {
    render() {
        return (
            <Content {...this.props} children={this.props.children}/>
        )
    }
}

ContentContainer.PropTypes = {
    sidebar: PropTypes.object.isRequired,
    topBar: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        topBar: state.topBar
    }
};

export default connect(mapStateToProps)(ContentContainer)