import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import Overlay from './overlay';
import {changeOverlay} from '../../actions/changeOverlay';
import {changeSidebar} from '../../actions/changeSidebar';

class OverlayContainer extends React.Component {
    render() {
        return (
            <Overlay {...this.props} />
        )
    }
}

OverlayContainer.PropTypes = {
    breakPoint: PropTypes.number.isRequired,
    sidebar: PropTypes.object.isRequired,
    siteOverlay: PropTypes.object.isRequired,
    changeOverlay: PropTypes.func.isRequired,
    changeSidebar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        siteOverlay: state.siteOverlay,
        breakPoint: state.breakPoint
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeOverlay: (sidebar)=> {
            dispatch(changeOverlay(sidebar))
        },
        changeSidebar: (data)=> {
            dispatch(changeSidebar(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);