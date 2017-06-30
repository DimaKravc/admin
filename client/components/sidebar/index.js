import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from './sidebar';
import {changeOverlay} from '../../actions/changeOverlay';
import {changeSidebar} from '../../actions/changeSidebar';

class SidebarContainer extends React.Component {
    render() {
        return (<Sidebar {...this.props}/>)
    }
}

SidebarContainer.PropTypes = {
    breakPoint: PropTypes.number.isRequired,
    topBar: PropTypes.object.isRequired,
    sidebar: PropTypes.object.isRequired,
    siteOverlay: PropTypes.object.isRequired,
    changeOverlay: PropTypes.func.isRequired,
    changeSidebar: PropTypes.func.isRequired
};

let mapStateToProps = (state) => {
    return {topBar: state.topBar, sidebar: state.sidebar, siteOverlay: state.siteOverlay, breakPoint: state.breakPoint}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeOverlay: (sidebar) => {
            dispatch(changeOverlay(sidebar))
        },
        changeSidebar: (sidebar, submenu) => {
            dispatch(changeSidebar(sidebar, submenu))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)