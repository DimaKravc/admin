import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import FormGroup from '../common/FormGroup';
import RaisedButton from '../common/RaisedButton';

export default class SingIn extends React.Component {
    render(){
        return (
            <div className="login-page--wrap">
                <div className="login-page">
                    <h1 className="brand">
                        <img className="brand__img" src={require('../../assets/images/paymo-logo.svg')} alt=""/>
                        <span className="brand__subtitle">Admin</span>
                    </h1>

                    <div className="login-box">
                        <div className="login-box__header">
                            <h3 className="login-box__title">Авторизация</h3>
                        </div>
                        <div className="login-box__content">
                            <form className="login-form" noValidate="novalidate">
                                <FormGroup
                                    type="text"
                                    id="user_email"
                                    name="user_email"
                                    labelText="Адрес электронной почты:"
                                    placeholderText="username@mail.com"
                                />
                                <FormGroup
                                    type="password"
                                    id="user_password"
                                    name="user_password"
                                    labelText="Пароль:"
                                    placeholderText="••••••"
                                />
                                <div className="login-form__footer">
                                    <RaisedButton
                                        type="submit"
                                        text="Войти"
                                        wave={true}
                                        className="primary"
                                    />
                                    <div>
                                        <Link to="/restore" className="password-recovery-link">Восстановить пароль</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login-box__footer">
                            У вас нет учетной записи? <Link to="/signup">Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}