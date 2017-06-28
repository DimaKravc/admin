import React from 'react';
import classNames from 'classnames';

export default class Overlay extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeOverlay = this.handleChangeOverlay.bind(this);
    }

    handleChangeOverlay() {
        let {breakPoint, changeSidebar, changeOverlay} = this.props;

        if (breakPoint > document.documentElement.clientWidth) {
            changeSidebar('hide', 'hide');
        } else {
            changeSidebar('show', 'hide');
        }

        changeOverlay('hide');
    }

    render() {
        let {siteOverlay} = this.props;
        return (
            <span
                className={classNames('site-overlay', {'site-overlay--show': siteOverlay.isShow})}
                onClick={this.handleChangeOverlay}/>
        )
    }
}