import React from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.props.callback) {
            event.preventDefault();
            this.props.callback();
        }
    }

    render() {
        const { className, style, type, text, disabled, wave } = this.props;

        return (
            <button
                className={classNames('button', { [className]: className })}
                style={style}
                type={type}
                onClick={this.handleClick}
                disabled={disabled}>
                <div className="button__inner--overlay">
                    <div className="button__inner">
                        {text}
                        {wave && <Ink />}
                    </div>
                </div>
            </button>
        )
    }
}

export default Button;