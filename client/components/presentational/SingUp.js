import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import FormGroup from '../common/FormGroup';
import RaisedButton from '../common/RaisedButton';

export default class SingUp extends React.Component {
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
                                    id="user_name"
                                    name="user_name"
                                    labelText="Имя:"
                                    placeholderText="Вася"
                                />
                                <FormGroup
                                    type="text"
                                    id="user_lastName"
                                    name="user_lastName"
                                    labelText="Фамилия:"
                                    placeholderText="Пупкин"
                                />
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
                                <FormGroup
                                    type="password"
                                    id="user_confirmPassword"
                                    name="user_confirmPassword"
                                    labelText="Подтвердите пароль:"
                                    placeholderText="••••••"
                                />
                                <div className="login-form__footer">
                                    <RaisedButton
                                        type="submit"
                                        text="Зарегистрироваться"
                                        wave={true}
                                        className="primary"
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