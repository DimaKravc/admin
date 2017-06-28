import React from 'react';
import classNames from 'classnames';
import Ink from 'react-ink';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        this.props.callback && this.props.callback()
    }

    render() {
        const { className, style, type, text, wave } = this.props;

        return (
            <button
                className={classNames('button', { [className]: className })}
                style={style}
                type={type}
                onClick={this.handleClick}>
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