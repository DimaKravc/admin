import React from 'react';
import PropTypes from 'prop-types';

export default class TopBar extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__col">
                    <a className="side-menu-toggle" href="#"><i className="side-menu-toggle__line"/></a>
                    <h2 className="page-headline">{this.props.headline}</h2>
                </div>
                <div className="header__col">
                    <div className="user">
                        <span className="user__icon" style={{backgroundImage: 'url('+ require('../../assets/images/userpic.svg') +')'}} />
                        <span className="user__name">{this.props.userName}</span>
                        <div className="user__dropdown user-options">
                            <ul className="user-options__list">
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#"><i className="dollar-icon"/> Финансы</a>
                                </li>
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#"><i className="gear-icon"/> Настройки</a>
                                </li>
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#"><i className="out-icon"/> Выйти из профиля</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-notifications">
                        <div className="user-notifications__bell">
                            <i className="user-notifications__bell-icon" />
                            <span className="user-notifications__count">22</span>
                        </div>
                        <div className="user-notifications__dropdown notifications">
                            <ul className="notifications__list">
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с 15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с 15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с 15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с 15:00 до 23:00 15.06.2016</a>
                                </li>
                            </ul>
                            <a className="notifications__show-all" href="#">Все уведомления</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}