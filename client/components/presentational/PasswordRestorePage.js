import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../common/FormGroup';
import RaisedButton from '../common/RaisedButton';

export default class SingupPage extends React.Component {
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
                            <h3 className="login-box__title">Восстановление пароля</h3>
                        </div>
                        <div className="login-box__content">
                            {(()=>{
                                if (false) {
                                    return (
                                        <form noValidate="novalidate">
                                            <FormGroup
                                                type="text"
                                                id="user_email"
                                                name="user_email"
                                                labelText="Адрес электронной почты:"
                                                placeholderText="username@mail.com"
                                            />
                                            <div className="login-box__form-footer">
                                                <RaisedButton
                                                    type="submit"
                                                    text="Отправить"
                                                    style="primary"
                                                />
                                            </div>
                                        </form>
                                    )
                                } else {
                                    return (
                                        <div className="login-box__info">
                                            <i className="success" />
                                            <p>Ссылка для восстановления пароля <br/>отправлена на <b className="user-email">username@mail.com</b></p>
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