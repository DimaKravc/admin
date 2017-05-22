import React from 'react';
import PropTypes from 'prop-types';

export default class SingupPage extends React.Component {
    render() {
        return (
            <nav className="site-nav">
                <ul className="site-nav__list">
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Поиск</a>

                        <ul className="site-nav__list sub-menu">
                            <li className="site-nav__item">
                                <a className="site-nav__link" href="#">Операции</a>
                            </li>
                            <li className="site-nav__item site-nav__item_has-children">
                                <a className="site-nav__link" href="#">Мерчанты</a>

                                <ul className="site-nav__list sub-menu">
                                    <li className="site-nav__item">
                                        <a className="site-nav__link" href="#">Сотрудники</a>
                                    </li>
                                    <li className="site-nav__item">
                                        <a className="site-nav__link" href="#">Мониторинг</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="site-nav__item site-nav__item_has-children">
                                <a className="site-nav__link" href="#">Магазины</a>

                                <ul className="site-nav__list sub-menu">
                                    <li className="site-nav__item">
                                        <a className="site-nav__link" href="#">Партнеры</a>
                                    </li>
                                    <li className="site-nav__item">
                                        <a className="site-nav__link" href="#">Агрегаторы</a>
                                    </li>
                                    <li className="site-nav__item">
                                        <a className="site-nav__link" href="#">Покупатели</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="site-nav__item">
                                <a className="site-nav__link" href="#">Витрины</a>
                            </li>
                            <li className="site-nav__item">
                                <a className="site-nav__link" href="#">Партнеры</a>
                            </li>
                            <li className="site-nav__item">
                                <a className="site-nav__link" href="#">Агрегаторы</a>
                            </li>
                            <li className="site-nav__item">
                                <a className="site-nav__link" href="#">Покупатели</a>
                            </li>
                        </ul>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Проверка</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Статистика</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Щлюзы</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Сотрудники</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Мониторинг</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Уведомления</a>
                    </li>
                    <li className="site-nav__item site-nav__item_has-children">
                        <a className="site-nav__link" href="#">Changelog</a>
                    </li>
                </ul>

                <div className="brand">
                    <img className="brand__img" src={require('../../assets/images/logo-dark.svg')} alt=""/>
                </div>
            </nav>
        )
    }
}