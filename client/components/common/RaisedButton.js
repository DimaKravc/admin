import React from 'react';
import PropTypes from 'prop-types';

const RaisedButton = (data) => {
    const { type, className, disabled, text } = data;
    return (
        <button
            type={type}
            className={className + " button"}
            disabled={disabled}
        >
            <div className="button__inner-overlay">
                <span className="button__inner">{text}</span>
            </div>
        </button>
    )
};

RaisedButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    wave: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default RaisedButton;