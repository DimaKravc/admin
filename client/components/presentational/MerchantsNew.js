import React from 'react';

export default class MerchantsNew extends React.Component {
    render() {
        return (
            <div>
                <section className="section">
                    <header className="section__header">
                        <h2 className="section__title">
                            Новые мерчанты
                        </h2>
                    </header>
                    <div className="section__primary">
                        <div className="data-view">
                            <div className="data-view__table--wrap">
                                <table className="data-view__table data-table">
                                    <thead>
                                    <tr>
                                        <th><a className="data-table__sort-trigger" href="#">Дата регистрации</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Наименование мерчанта</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Адрес электронной почты</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Партнер</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Промо-код</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Источник трафика</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Статус</a></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ИП Васечкин</td>
                                        <td>edd.cartwright@yahoo.com</td>
                                        <td>ИП Цветочков</td>
                                        <td>hkdgf384</td>
                                        <td>Реклама</td>
                                        <td><b className="primary">Активен</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>domenico_howell@gmail.com</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>Поисковые системы</td>
                                        <td><b className="secondary">Подключен</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>etha.auer@roger.me</td>
                                        <td>ИП Цветочков</td>
                                        <td>&nbsp;</td>
                                        <td>Рассылка</td>
                                        <td><b className="tertiary">Верифицирован</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>domenico_howell@gmail.com</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>domenico_howell@gmail.com</td>
                                        <td><b className="quaternary">Документы на рассмотрении</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ИП Васечкин</td>
                                        <td>edd.cartwright@yahoo.com</td>
                                        <td>ИП Цветочков</td>
                                        <td>hkdgf384</td>
                                        <td>Реклама</td>
                                        <td><b className="primary">Активен</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:14</td>
                                        <td>ООО «Ромашка»</td>
                                        <td>domenico_howell@gmail.com</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>Поисковые системы</td>
                                        <td><b className="secondary">Подключен</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>ООО «ШОПШОП»</td>
                                        <td>etha.auer@roger.me</td>
                                        <td>ИП Цветочков</td>
                                        <td>&nbsp;</td>
                                        <td>Рассылка</td>
                                        <td><b className="tertiary">Верифицирован</b></td>
                                        <td>
                                            <div className="moderation-menu">
                                                <a className="moderation-menu__trigger" href="#">
                                                    <i className="i-manager"/>
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