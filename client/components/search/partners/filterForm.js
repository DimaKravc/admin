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
            organizationType: 'ip',
            accompanyingManager: 'manager-1',
            attachedMerchant: 'merchant-1',
            ogrn: '316028000092762',
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
            this
                .props
                .onSearch(this.state);
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
                                                    field="paymoPartnerID"
                                                    label="PAYMO Partner ID"
                                                    placeholder="0000000"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <SelectFieldGroup
                                            field="organizationType"
                                            label="Тип ЮЛ"
                                            searchable
                                            value={this.state['organizationType']}
                                            options={[
                                            {
                                                value: 'ip',
                                                label: 'ИП'
                                            }, {
                                                value: 'chp',
                                                label: 'ЧП'
                                            }, {
                                                value: 'ooo',
                                                label: 'OOO'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="organizationName"
                                            label="Наименование организации"
                                            placeholder="ИП «Васечкин»"
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Дата регистрации</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="registrationDateFor"
                                                    label="от"
                                                    placeholder="23.04.2016"
                                                    value={this.state['registrationDateFor']
                                                    ? this.state['registrationDateFor'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="registrationDateTo"
                                                    label="до"
                                                    placeholder="23.04.2017"
                                                    value={this.state['registrationDateTo']
                                                    ? this.state['registrationDateTo'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="accompanyingManager"
                                            label="Сопровождающий менеджер"
                                            value={this.state['accompanyingManager']}
                                            options={[
                                            {
                                                value: 'manager-1',
                                                label: 'Иван Васечкин'
                                            }, {
                                                value: 'manager-2',
                                                label: 'Вася Иванов'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Дата регистрации</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="contractDateFrom"
                                                    label="от"
                                                    placeholder="23.04.2016"
                                                    value={this.state['contractDateFrom']
                                                    ? this.state['contractDateFrom'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="contractDateTo"
                                                    label="до"
                                                    placeholder="23.04.2017"
                                                    value={this.state['contractDateTo']
                                                    ? this.state['contractDateTo'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="emailAddress"
                                            label="Email"
                                            placeholder="username@mail.com"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="phoneNumber"
                                            label="Номер телефона"
                                            placeholder="+7 (000) 000-00-00"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="contractNumber"
                                            label="Номер договора"
                                            placeholder="0000000000000"
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
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="promocode"
                                                    label="Промокод"
                                                    placeholder="27835556987"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="attachedMerchant"
                                            label="Привязанный мерчант"
                                            value={this.state['attachedMerchant']}
                                            options={[
                                            {
                                                value: 'merchant-1',
                                                label: 'ИП «Васечкин»'
                                            }, {
                                                value: 'merchant-2',
                                                label: 'ООО «Васечкин»'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="paymoMerchantID"
                                            label="PAYMO Merchant ID"
                                            placeholder="0000000"
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="inn"
                                                    label="ИНН"
                                                    placeholder="27835556987"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <SelectFieldGroup
                                            field="ogrn"
                                            label="ОГРН"
                                            value={this.state['ogrn']}
                                            options={[
                                            {
                                                value: '316028000092762',
                                                label: '316028000092762'
                                            }, {
                                                value: '316028000092763',
                                                label: '316028000092763'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="checkingAccount"
                                            label="Расчетный счет"
                                            placeholder="40802810300000000593"
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <TextFieldGroup
                                            type="text"
                                            field="headName"
                                            label="ФИО руководителя"
                                            placeholder="Иван Васильевич Васечкин"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <TextFieldGroup
                                            type="text"
                                            field="headPassport"
                                            label="Серия и номер паспорта руководителя"
                                            placeholder="14 08 675463"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className='col-xs-12 col-sm-6 col-md-4'>
                                        <TextFieldGroup
                                            type="text"
                                            field="clientContactPerson"
                                            label="Контактное лицо клиента"
                                            placeholder="Иван Васечкин"
                                            onChange={this.onChange}/>
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