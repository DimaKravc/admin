import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextFieldGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            type: this.props.type,
            complexityPassword: ""
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
        this.complexPasswordValidate = this.complexPasswordValidate.bind(this);
    }

    handleFocus() {
        this.setState({
            focused: true
        })
    }

    handleFocusOut() {
        this.setState({
            focused: false
        })
    }

    handleShowPassword() {
        this.setState((prevState)=> {
            return {
                type: prevState.type === "password" ? "text" : "password"
            }
        })
    }

    complexPasswordValidate(event) {
        let value = event.target.value;
        let hasTwoUpperCase = /(?=.*[A-Z].*[A-Z])/.test(value);
        let hasTwoLowerCase = /(?=.*[a-z].*[a-z])/.test(value);
        let hasOneSpecialCase = /(?=.*[!@#$&*])/.test(value);
        let hasTwoDigits = /(?=.*[0-9].*[0-9])/.test(value);
        let hasLength = value.length > 7;
        let validateResult = hasTwoUpperCase + hasTwoLowerCase + hasOneSpecialCase + hasTwoDigits + hasLength;

        let className = () => {
            switch (validateResult) {
                case 5:
                    return "great";
                case 4:
                    return "good";
                case 3:
                    return "so-so";
                case 2:
                    return "weak";
                case 1:
                    return "";
            }
        };

        this.setState({
            complexityPassword: className()
        });

    }

    render() {
        return (
            <div className="form-group">
                <label
                    className={classNames('form-group__label', {'focused': this.state.focused})}
                    htmlFor={this.props.field}
                >
                    {this.props.label}
                </label>
                <div
                    className={classNames('form-group__field--wrap', {'focused': this.state.focused, 'has-error': this.props.error})}>
                    <input className="form-group__field"
                           type={this.state.type}
                           id={this.props.field}
                           name={this.props.field}
                           placeholder={this.props.placeholder}
                           value={this.props.value}
                           onChange={(event)=>{
                                this.props.onChange(event);
                                this.props.complexPassword && this.complexPasswordValidate(event);
                           }}
                           onFocus={this.handleFocus}
                           onBlur={(event)=>{
                                this.handleFocusOut(event);
                                this.props.checkUserExists && this.props.checkUserExists(event);
                           }}
                    />
                    {this.props.checkUserExistStatus && emailStatusTemplate(this.props.checkUserExistStatus)}
                    {this.props.displayPassword &&
                    <span className="form-group__password-trigger password-trigger" onClick={this.handleShowPassword}>
                        <i className="password-trigger__icon material-icons"
                           style={{color: this.state.type === "password" ? "#beccd8" : "#00ACC1"}}>remove_red_eye</i>
                    </span>
                    }
                </div>
                {this.props.complexPassword &&
                <span className={"form-group__password-status " + this.state.complexityPassword}/>}
                {this.props.error && <span className="form-group__error-msg">{this.props.error}</span>}
            </div>
        )
    }
}

const emailStatusTemplate = (status) => {
    return (
        <span className="form-group__email-status">
                {status === 'loading' &&
                <svg className="form-group__email-status_type_spinner"
                     width="20px"
                     height="20px"
                     viewBox="0 0 66 66"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                    />
                </svg>
                }
            {status === 'success' && <i className="form-group__email-status_type_success material-icons">done</i>}
            {status === 'failure' && <i className="form-group__email-status_type_fail material-icons">close</i>}
            </span>
    )
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    displayPassword: PropTypes.bool,
    complexPassword: PropTypes.bool,
    checkUserExistStatus: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
};

export default TextFieldGroup;