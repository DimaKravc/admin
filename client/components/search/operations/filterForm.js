import React from 'react';
import classNames from 'classnames';

import TextFieldGroup from '../../common/TextFieldGroup';
import SelectFieldGroup from '../../common/SelectFieldGroup';
import CheckBox from '../../common/CheckBox';
import Button from '../../common/Button';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentPoint: 'shop.ru',
            paymentStatus: 'paid',
            contractHolder: 'eurasian',
            operationType: 'invoicing',
            processingCenter: 'paymo',
            paymentMethod: 'yandexMoney',
            currency: 'rub',
            testPayment: false,
            additionalOpt: true,
            additionalOptExpanded: false
        };

        this.onChange = this
            .onChange
            .bind(this);
        this.onChangeDate = this
            .onChangeDate
            .bind(this);
        this.onChangeTime = this
            .onChangeTime
            .bind(this);
        this.handleBtnClick = this
            .handleBtnClick
            .bind(this);
        this.handleSearchBtnClick = this
            .handleSearchBtnClick
            .bind(this);
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onChangeDate(event, field, date) {
        if (event) {
            this.setState({
                [event.target.name]: {
                    value: event.target.value
                }
            })
        } else if (field && date) {
            const curDate = String(date.getDate()).length == 1
                ? '0' + date.getDate()
                : date.getDate();
            const curMonth = String(date.getMonth() + 1).length == 1
                ? '0' + (date.getMonth() + 1)
                : (date.getMonth() + 1);

            this.setState({
                [field]: {
                    value: `${curDate}.${curMonth}.${date.getFullYear()}`,
                    date: date
                }
            })
        }
    }
    onChangeTime(event, field, date) {
        if (event) {
            this.setState({
                [event.target.name]: {
                    value: event.target.value
                }
            })
        } else if (field && date) {
            const curHour = String(date.getHours()).length == 1
                ? '0' + date.getHours()
                : date.getHours();
            const curMinutes = String(date.getMinutes()).length == 1
                ? '0' + date.getMinutes()
                : date.getMinutes();

            this.setState({
                [field]: {
                    value: `${curHour}:${curMinutes}`,
                    date: date
                }
            })
        }
    }
    handleBtnClick() {
        this.setState((prevState, props) => {
            return {
                additionalOptExpanded: !prevState.additionalOptExpanded
            }
        })
    }
    handleSearchBtnClick() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state);
        }
    }
    render() {
        return (
            <section className="section">
                <div className="section__primary">
                    <div className="query-form">
                        <div className="query-form__header">
                            <h3 className="query-form__title">Основные параметры</h3>
                        </div>
                        <div className="query-form__primary">
                            <div className="query-form__inner">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="paymoMerchantID"
                                                    label="PAYMO Merchant ID"
                                                    placeholder="0000000"
                                                    onChange={this.onChange}/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="paymoOperationID"
                                                    label="PAYMO Operation ID"
                                                    placeholder="0000000"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="merchantOperationID"
                                                    label="Merchant Operation ID"
                                                    placeholder="009736240"
                                                    onChange={this.onChange}/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="bankOperationID"
                                                    label="Bank Operation ID"
                                                    placeholder="009736240"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="paymentPoint"
                                            label="Точка оплаты"
                                            searchable
                                            value={this.state['paymentPoint']}
                                            options={[
                                            {
                                                value: 'shop.ru',
                                                label: 'shop.ru'
                                            }, {
                                                value: 'shop.uz',
                                                label: 'shop.uz'
                                            }, {
                                                value: 'shop.kz',
                                                label: 'shop.kz'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="paymentStatus"
                                            label="Статус платежа"
                                            value={this.state['paymentStatus']}
                                            options={[
                                            {
                                                value: 'paid',
                                                label: 'Оплачен'
                                            }, {
                                                value: 'not paid',
                                                label: 'Неуспешный'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="form-group">
                                            <CheckBox
                                                label={'Тестовый платеж'}
                                                field={'testPayment'}
                                                checked={this.state['testPayment']}
                                                onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Сумма платежа</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="paymentSumFrom"
                                                    label="от"
                                                    placeholder="1000,00 Р"
                                                    onChange={this.onChange}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    field="paymentSumTo"
                                                    label="до"
                                                    placeholder="4000,00 Р"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Дата</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="dateFrom"
                                                    label="от"
                                                    placeholder="23.04.2016"
                                                    value={this.state['dateFrom']
                                                    ? this.state['dateFrom'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="dateTo"
                                                    label="до"
                                                    placeholder="23.04.2016"
                                                    value={this.state['dateTo']
                                                    ? this.state['dateTo'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Время</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    time
                                                    field="timeFrom"
                                                    label="от"
                                                    placeholder="23:30"
                                                    value={this.state['timeFrom']
                                                    ? this.state['timeFrom'].value
                                                    : ''}
                                                    onChange={this.onChangeTime}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    time
                                                    field="timeTo"
                                                    label="до"
                                                    placeholder="23:55"
                                                    value={this.state['timeTo']
                                                    ? this.state['timeTo'].value
                                                    : ''}
                                                    onChange={this.onChangeTime}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-xs-12 col-sm-8'>
                                        <TextFieldGroup
                                            type="text"
                                            field="extraQuery"
                                            label="Поиск по extra параметрам"
                                            placeholder="Любой запрос"
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="query-form__additional"
                            style={{
                            display: this.state.additionalOptExpanded
                                ? 'block'
                                : 'none'
                        }}>
                            <div className="query-form__inner">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="contractHolder"
                                            label="Держатель договора"
                                            value={this.state['contractHolder']}
                                            options={[
                                            {
                                                value: 'eurasian',
                                                label: 'Евразийский'
                                            }, {
                                                value: 'european',
                                                label: 'Европейский'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="operationType"
                                            label="Тип операции"
                                            value={this.state['operationType']}
                                            options={[
                                            {
                                                value: 'invoicing',
                                                label: 'Выставление счета'
                                            }, {
                                                value: 'payment',
                                                label: 'Оплата'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="processingCenter"
                                            label="Процессинговый центр"
                                            value={this.state['processingCenter']}
                                            options={[
                                            {
                                                value: 'paymo',
                                                label: 'PAYMO'
                                            }, {
                                                value: 'yandex',
                                                label: 'YANDEX'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="paymentMethod"
                                            label="Способ оплаты"
                                            value={this.state['paymentMethod']}
                                            options={[
                                            {
                                                value: 'yandexMoney',
                                                label: 'Яндекс.Деньги'
                                            }, {
                                                value: 'visa',
                                                label: 'VISA'
                                            }, {
                                                value: 'masterCard',
                                                label: 'Master Card'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="numberPaymentInstrument"
                                            label="Номер платежного инструмента"
                                            placeholder="410012293741253"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="row">
                                            <div className="col-xs-6 col-lg-4">
                                                <SelectFieldGroup
                                                    field="currency"
                                                    label="Валюта"
                                                    searchable
                                                    value={this.state['currency']}
                                                    options={[
                                                    {
                                                        value: 'rub',
                                                        label: 'RUB'
                                                    }, {
                                                        value: 'eur',
                                                        label: 'EUR'
                                                    }, {
                                                        value: 'usd',
                                                        label: 'USD'
                                                    }
                                                ]}
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <div className="row">
                                            <div className=" col-xs-12 col-lg-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="phoneNumber"
                                                    label="Номер телефона"
                                                    placeholder="+7 (000) 000-00-00"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="emailAddress"
                                                    label="Email"
                                                    placeholder="username@mail.com"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames("query-form__footer", {'expanded': this.state.additionalOptExpanded})}>
                            <Button
                                type="submit"
                                text="Поиск"
                                wave
                                className="style-1"
                                disabled={this.state.submitDisabled}
                                callback={this.handleSearchBtnClick}/> {this.state.additionalOpt && <Button
                                type="submit"
                                text={this.state.additionalOptExpanded
                                ? 'Обычный поиск'
                                : 'Расширеный поиск'}
                                wave
                                className="default"
                                disabled={this.state.submitDisabled}
                                callback={this.handleBtnClick}/>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FilterForm;