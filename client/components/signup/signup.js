import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import validateInput from '../../actions/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import RaisedButton from '../common/RaisedButton';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userLastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false,
            checkUserExistStatus: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    isValid(type) {
        const {errors, isValid} = validateInput(this.state, type);

        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    checkUserExists(e) {
        const val = e.target.value;

        if (validateInput(this.state, {'isEmail': true}).isValid) {
            this.setState({checkUserExistStatus: 'loading', isLoading: true});

            this.props.isUserExists(val).then(res => {
                let errors = this.state.errors;
                let invalid;
                let checkUserExistStatus;

                if (res.data.user_email) {
                    errors.email = 'Данный адрес уже занят';
                    invalid = true;
                    checkUserExistStatus = 'failure';
                } else {
                    errors.email = '';
                    invalid = false;
                    checkUserExistStatus = 'success';
                }

                this.setState({errors, invalid, checkUserExistStatus, isLoading: invalid});
            });
        } else {
            this.setState({checkUserExistStatus: ''});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});

            this.props.userSignUpRequest(this.state).then(() => {
                    this.context.router.history.push('/')
                },
                (err) => this.setState({errors: err.response.data, isLoading: false})
            )
        }
    }

    render() {
        let {errors, checkUserExistStatus} = this.state;
        return (
            <div className="login-page--wrap">
                <div className="login-page">
                    <h1 className="brand">
                        <img className="brand__img" src={require('../../assets/images/paymo-logo.svg')}
                             alt="Paymo Admin"/>
                        <span className="brand__subtitle">Admin</span>
                    </h1>
                    <div className="login-box">
                        <div className="login-box__header">
                            <h3 className="login-box__title">Регистрация</h3>
                        </div>
                        <div className="login-box__content">
                            <form className="login-form" noValidate="novalidate" onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    error={errors.username}
                                    type="text"
                                    field="username"
                                    label="Имя:"
                                    placeholder="Вася"
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    error={errors.userLastName}
                                    type="text"
                                    field="userLastName"
                                    label="Фамилия:"
                                    placeholder="Пупкин"
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    error={errors.email}
                                    type="email"
                                    field="email"
                                    checkUserExists={this.checkUserExists}
                                    checkUserExistStatus={checkUserExistStatus}
                                    label="Адрес электронной почты:"
                                    placeholder="username@mail.com"
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    error={errors.password}
                                    type="password"
                                    field="password"
                                    label="Пароль:"
                                    placeholder="••••••"
                                    displayPassword={true}
                                    complexPassword={true}
                                    onChange={this.onChange}
                                />
                                <TextFieldGroup
                                    error={errors.passwordConfirmation}
                                    type="password"
                                    field="passwordConfirmation"
                                    label="Подтвердите пароль:"
                                    placeholder="••••••"
                                    displayPassword={true}
                                    onChange={this.onChange}
                                />
                                <div className="login-form__footer">
                                    <RaisedButton
                                        type="submit"
                                        text="Зарегистрироваться"
                                        wave={true}
                                        className="primary"
                                        disabled={this.state.isLoading}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="login-box__footer">
                            У вас уже есть аккаунт? <Link to="/signin">Войти</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignUp.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignUp;