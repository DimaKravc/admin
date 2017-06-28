import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Content extends React.Component {
    render() {
        return (
            <div className={classNames('container', {'container--pushed-right': this.props.sidebar.isShow, 'container--pushed-bottom': this.props.topBar.isSticky})}>
                {this.props.children}
            </div>
        )
    }
}