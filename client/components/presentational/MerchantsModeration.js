import React from 'react';
import PropTypes from 'prop-types';

export default class MerchantsModeration extends React.Component {
    render() {
        return (
            <div className="container" style={{marginLeft: "256px"}}>
                <section className="section">
                    <header className="section__header">
                        <h2 className="section__title">
                            Ожидающие модерации мерчанты
                        </h2>
                    </header>
                    <div className="section__primary">
                        <div className="data-view">
                            <div className="data-view__table--wrap">
                                <table className="data-view__table data-table">
                                    <thead>
                                    <tr>
                                        <th width="12%"><a className="data-table__sort-trigger" href="#">Дата заявки</a></th>
                                        <th width="16%"><a className="data-table__sort-trigger" href="#">Наименование мерчанта</a></th>
                                        <th width="14%"><a className="data-table__sort-trigger" href="#">Название магазина</a></th>
                                        <th width="16%"><a className="data-table__sort-trigger" href="#">URL магазина</a></th>
                                        <th width="18%"><a className="data-table__sort-trigger" href="#">Категория магазина</a></th>
                                        <th width="12%"><a className="data-table__sort-trigger" href="#">Тип</a></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ИП Васечкин</td>
                                        <td>Shop.ru</td>
                                        <td><a href="#">www.shop.ru</a></td>
                                        <td>Автотовары</td>
                                        <td><b className="primary">Новый</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>Shop-shop.ru</td>
                                        <td><a href="#">www.shop-shop.ru</a></td>
                                        <td>Косметика</td>
                                        <td><b className="quaternary">Изменения</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>Shop.ru</td>
                                        <td><a href="#">www.shop.ru</a></td>
                                        <td>Товары для здоровья</td>
                                        <td><b className="primary">Новый</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>shop-shop.ru</td>
                                        <td><a href="#">www.shop-shop.ru</a></td>
                                        <td>Косметика</td>
                                        <td><b className="quaternary">Изменения</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>Shop.ru</td>
                                        <td><a href="#">www.shop.ru</a></td>
                                        <td>Товары для здоровья</td>
                                        <td><b className="primary">Новый</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>Shop-shop.ru</td>
                                        <td><a href="#">www.shop-shop.ru</a></td>
                                        <td>Косметика</td>
                                        <td><b className="quaternary">Изменения</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>shop.ru</td>
                                        <td><a href="#">www.shop.ru</a></td>
                                        <td>Товары для здоровья</td>
                                        <td><b className="primary">Новый</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>Shop-shop.ru</td>
                                        <td><a href="#">www.shop-shop.ru</a></td>
                                        <td>Косметика</td>
                                        <td><b className="quaternary">Изменения</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>shop.ru</td>
                                        <td><a href="#">www.shop.ru</a></td>
                                        <td>Товары для здоровья</td>
                                        <td><b className="primary">Новый</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-accept"/>
                                                </a>
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-reject"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <footer className="data-view__footer">
                                <div className="data-view__utils">

                                </div>
                            </footer>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}