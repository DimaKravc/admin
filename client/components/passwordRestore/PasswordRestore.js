import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import Button from '../common/Button';

class PasswordRestore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restored: false
        }

        this.onChange = this
            .onChange
            .bind(this);
    }
    onChange() {
        this.setState({
            restored: true
        });
    }
    render() {
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
                            <h3 className="login-box__title">Восстановление пароля</h3>
                        </div>
                        <div className="login-box__content">
                            {(() => {
                                if (!this.state.restored) {
                                    return (
                                        <form className="login-form" noValidate="novalidate">
                                            <TextFieldGroup
                                                type="email"
                                                field="email"
                                                label="Адрес электронной почты:"
                                                placeholder="username@mail.com"
                                                onChange={this.onChange}/>
                                            <div className="login-form__footer">
                                                <Button
                                                    type="submit"
                                                    text="Войти"
                                                    wave
                                                    className="style-1"
                                                    callback={this.onChange}/>
                                            </div>
                                        </form>
                                    )
                                } else {
                                    return (
                                        <div className="login-box__info">
                                            <i className="success"/>
                                            <p>Ссылка для восстановления пароля
                                                <br/>отправлена на&nbsp;
                                                <b className="user-email">username@mail.com</b>
                                            </p>
                                        </div>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PasswordRestore;