import React from 'react';
import PropTypes from 'prop-types';

import SelectField from '../common/SelectField';
import FormGroup from '../common/FormGroup';
import FormGroupTwice from '../common/FormGroupTwice';
import CheckBox from '../common/CheckBox';
import RaisedButton from '../common/RaisedButton';

export default class SearchOperations extends React.Component {
    render() {
        return (
            <div className="container" style={{marginLeft: "256px"}}>
                <header className="page-header">
                    <div className="page-header__col">
                        <h1 className="page-header__title">{this.props.pageTitle}</h1>
                    </div>
                    <div className="page-header__col">
                        <div className="download-options">
                            <ul className="download-options__list">
                                <li className="download-options__item">
                                    <a className="download-options__link" href="#">
                                        <i className="download-options__link-icon"/>
                                        <span className="download-options__link-text">xls</span>
                                    </a>
                                </li>
                                <li className="download-options__item">
                                    <a className="download-options__link" href="#">
                                        <i className="download-options__link-icon"/>
                                        <span className="download-options__link-text">pdf</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <section className="section">
                    <div className="section__primary">
                        <div className="query-form">
                            <div className="query-form__primary">
                                <div className="query-form__header">
                                    <h3 className="query-form__title">Основные параметры</h3>
                                </div>
                                <div className="g-container">
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <div className="g-row">
                                                <div className="g-col">
                                                    <FormGroup
                                                        type="text"
                                                        id="paymo_merhant_ID"
                                                        name="paymo_merhant_ID"
                                                        labelText="PAYMO Merchant ID"
                                                        placeholderText="0000000"
                                                    />
                                                </div>
                                                <div className="g-col">
                                                    <FormGroup
                                                        type="text"
                                                        id="paymo_operation_ID"
                                                        name="paymo_operation_ID"
                                                        labelText="PAYMO Operation ID"
                                                        placeholderText="0000000"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="g-col-4">
                                            <div className="g-row">
                                                <div className="g-col">
                                                    <FormGroup
                                                        type="text"
                                                        id="merchant_operation_ID"
                                                        name="merchant_operation_ID"
                                                        labelText="Merchant Operation ID"
                                                        placeholderText="009736240"
                                                    />
                                                </div>
                                                <div className="g-col">
                                                    <FormGroup
                                                        type="text"
                                                        id="bank_operation_ID"
                                                        name="bank_operation_ID"
                                                        labelText="Bank Operation ID"
                                                        placeholderText="009736240"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Точка оплаты"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Статус платежа"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                        <div className="g-col-4">
                                            <CheckBox
                                                labelText="Тестовый платеж"
                                                id="test_payment"
                                                callback={()=>{console.log(123)}}
                                            />
                                        </div>
                                    </div>
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <FormGroupTwice
                                                labelText="Сумма платежа"
                                                type="text"
                                                type2="text"
                                                id="amount_payment_from"
                                                id2="amount_payment_to"
                                                name="amount_payment_from"
                                                name2="amount_payment_to"
                                                fieldCaption="от"
                                                fieldCaption2="до"
                                                placeholderText="1000,00 Р"
                                                placeholderText2="4000,00 Р"
                                            />
                                        </div>
                                        <div className="g-col-4">
                                            <FormGroupTwice
                                                labelText="Дата"
                                                type="text"
                                                type2="text"
                                                id="date_from"
                                                id2="date_to"
                                                name="date_from"
                                                name2="date_to"
                                                fieldCaption="от"
                                                fieldCaption2="до"
                                                placeholderText="23.04.2016"
                                                placeholderText2="23.04.2016"
                                            />
                                        </div>
                                        <div className="g-col-4">
                                            <FormGroupTwice
                                                labelText="Время"
                                                type="text"
                                                type2="text"
                                                id="time_from"
                                                id2="time_to"
                                                name="time_from"
                                                name2="time_to"
                                                fieldCaption="от"
                                                fieldCaption2="до"
                                                placeholderText="23:30"
                                                placeholderText2="23:55"
                                            />
                                        </div>
                                    </div>
                                    <div className="g-row">
                                        <div className="g-col-6">
                                            <FormGroup
                                                type="text"
                                                id="search_by_extra"
                                                name="search_by_extra"
                                                labelText="Поиск по extra параметрам"
                                                placeholderText="Любой запрос"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="query-form__additional">
                                <div className="g-container">
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Держатель договора"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Тип операции"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Процессинговый центр"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                    </div>
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <SelectField
                                                labelText="Способ оплаты"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                        <div className="g-col-4">
                                            <FormGroup
                                                type="text"
                                                id="number_payment_instrument"
                                                name="number_payment_instrument"
                                                labelText="Номер платежного инструмента"
                                                placeholderText="410012293741253"
                                            />
                                        </div>
                                        <div className="g-col-3">
                                            <SelectField
                                                labelText="Валюта"
                                                name="point_payment"
                                                id="point_payment"
                                            >
                                                <option value="value-1" text="Value-1" />
                                                <option value="value-2" text="Value-2" />
                                                <option value="value-3" text="Value-3" />
                                            </SelectField>
                                        </div>
                                    </div>
                                    <div className="g-row">
                                        <div className="g-col-4">
                                            <FormGroup
                                                type="text"
                                                id="number_phone"
                                                name="number_phone"
                                                labelText="Номер телефона"
                                                placeholderText="+7 (000) 000-00-00"
                                            />
                                        </div>
                                        <div className="g-col-4">
                                            <FormGroup
                                                type="email"
                                                id="email_address"
                                                name="email_address"
                                                labelText="Email"
                                                placeholderText="username@mail.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <header className="section__header">
                        <h2 className="section__title">
                            Результаты поиска
                        </h2>
                    </header>
                    <div className="section__primary">
                        <div className="data-view">
                            <div className="data-view__table--wrap">
                                <table className="data-view__table data-table">
                                    <thead>
                                    <tr>
                                        <th width="10%"><a className="data-table__sort-trigger" href="#">Дата платежа</a></th>
                                        <th width="8%"><a className="data-table__sort-trigger" href="#">PAYMO ID</a></th>
                                        <th width="12%"><a className="data-table__sort-trigger" href="#">Точка оплаты</a></th>
                                        <th width="18%"><a className="data-table__sort-trigger" href="#">Email плательщика</a></th>
                                        <th width="30%"><a className="data-table__sort-trigger" href="#">Телефон плательщика</a></th>
                                        <th width="12%"><a className="data-table__sort-trigger" href="#">Сумма транзакции</a></th>
                                        <th><a className="data-table__sort-trigger" href="#">Статус платежа</a></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>237846238</td>
                                        <td>Shop.ru</td>
                                        <td>lane.labadie@yahoo.com</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">1 000,84 Р</b></td>
                                        <td><b className="secondary">Оплачен</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>ima.hintz@hotmail.com</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b className="fifth">Неуспешный</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>800983465</td>
                                        <td>Shopshopshoop.ru</td>
                                        <td>yasmine_johnson@yvonne.net</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">89 387,84 Р</b></td>
                                        <td><b>В обработке</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>weber.weldon@treutel.us</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b className="fifth">Неуспешный</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>sebastian.gaylord@mitchell.tv</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b>В обработке</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>kuvalis_gertrude@weimann.me</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b className="fifth">Неуспешный</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>casey.fritsch@kylee.biz</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b>В обработке</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>alisa.muller@yahoo.com</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">2 345,84 Р</b></td>
                                        <td><b className="fifth">Неуспешный</b></td>
                                    </tr>
                                    <tr>
                                        <td>01.10.16 22:12</td>
                                        <td>287348200</td>
                                        <td>Shopshoop.ru</td>
                                        <td>chaya.boehm@edison.info</td>
                                        <td>8 (4732) 04-65-67</td>
                                        <td><b className="align-right">12 345,84 Р</b></td>
                                        <td><b>В обработке</b></td>
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