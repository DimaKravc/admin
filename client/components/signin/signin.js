import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import validateInput from '../../actions/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import Button from '../common/Button';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
            submitDisabled: false,
            invalid: false
        };

        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid(type) {
        const {errors, isValid} = validateInput(this.state, type);

        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        let validationOptions = {
            emailIsEmpty: true,
            isEmail: true,
            passwordIsEmpty: true
        };

        if (this.isValid(validationOptions)) {
            this.setState({errors: {}, submitDisabled: true});
            this
                .props
                .login(this.state)
                .then(() => {
                    this
                        .context
                        .router
                        .history
                        .push('/')
                }, (err) => {
                    this.setState({submitDisabled: false, errors: JSON.parse(err.response.data)})
                })
        }
    }

    render() {
        let {errors} = this.state;
        return (
            <div className="login-page--wrap">
                <div className="login-page">
                    <h1 className="brand">
                        <img
                            className="brand__img"
                            src={require('../../assets/images/paymo-logo.svg')}
                            alt=""/>
                        <span className="brand__subtitle">Admin</span>
                    </h1>

                    <div className="login-box">
                        <div className="login-box__header">
                            <h3 className="login-box__title">Авторизация</h3>
                        </div>
                        <div className="login-box__content">
                            <form className="login-form" noValidate="novalidate" onSubmit={this.onSubmit}>

                                {errors.form && <div className="login-form__error-msg">{errors.form}</div>}

                                <TextFieldGroup
                                    error={errors.email}
                                    type="email"
                                    field="email"
                                    label="Адрес электронной почты:"
                                    placeholder="username@mail.com"
                                    onChange={this.onChange}/>
                                <TextFieldGroup
                                    error={errors.password}
                                    type="password"
                                    field="password"
                                    label="Пароль:"
                                    placeholder="••••••"
                                    displayPassword={true}
                                    onChange={this.onChange}/>
                                <div className="login-form__footer">
                                    <Button
                                        type="submit"
                                        text="Войти"
                                        wave
                                        className="style-1"
                                        disabled={this.state.submitDisabled}/>
                                    <div>
                                        <Link to="/restore" className="password-recovery-link">Восстановить пароль</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login-box__footer">
                            У вас нет учетной записи?&nbsp;
                            <Link to="/signup">Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignIn.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignIn;