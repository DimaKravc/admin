import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TopBar from './topBar';
import {changeOverlay} from '../../actions/changeOverlay';
import {changeSidebar} from '../../actions/changeSidebar';
import {logout} from '../../actions/authActions';

class TopBarContainer extends React.Component {
    render() {
        return (
            <TopBar {...this.props} />
        )
    }
}

TopBarContainer.propTypes = {
    breakPoint: PropTypes.number.isRequired,
    sidebar: PropTypes.object.isRequired,
    topBar: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    changeOverlay: PropTypes.func.isRequired,
    changeSidebar: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        topBar: state.topBar,
        breakPoint: state.breakPoint,
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeOverlay: (overlay)=> {
            dispatch(changeOverlay(overlay))
        },
        changeSidebar: (sidebar, submenu)=> {
            dispatch(changeSidebar(sidebar, submenu))
        },
        logout: ()=> {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)