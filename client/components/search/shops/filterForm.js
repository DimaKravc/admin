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
            storeCategory: 'category-1',
            storeStatus: 'status-1',
            additionalOpt: false,
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
                                                    field="paymoMerchantID"
                                                    label="PAYMO Merchant ID"
                                                    placeholder="0000000"
                                                    onChange={this.onChange}/>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="paymoShopID"
                                                    label="PAYMO Shop ID"
                                                    placeholder="0000000"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="apiKey"
                                            label="Api-key"
                                            placeholder="83476597346"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <SelectFieldGroup
                                            field="storeCategory"
                                            label="Категория магазина"
                                            searchable
                                            value={this.state['storeCategory']}
                                            options={[
                                            {
                                                value: 'category-1',
                                                label: 'Красота и здоровье'
                                            }, {
                                                value: 'category-1',
                                                label: 'Красота'
                                            }, {
                                                value: 'category-1',
                                                label: 'Здоровье'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="storeName"
                                            label="Название магазина"
                                            placeholder="shop.ru"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="storeURL"
                                            label="URL магазина"
                                            placeholder="www.shop.ru"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <SelectFieldGroup
                                            field="storeStatus"
                                            label="Статус магазина"
                                            searchable
                                            value={this.state['storeStatus']}
                                            options={[
                                            {
                                                value: 'status-1',
                                                label: 'Активен'
                                            }, {
                                                value: 'status-2',
                                                label: 'Отключен'
                                            }
                                        ]}
                                            onChange={this.onChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="phoneNumber"
                                            label="Телефон магазина"
                                            placeholder="+7 (234) 234-34-56"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="emailAddress"
                                            label="Email магазина"
                                            placeholder="username@mail.com"
                                            onChange={this.onChange}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Дата создания</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="createDateFrom"
                                                    label="от"
                                                    placeholder="23.04.2016"
                                                    value={this.state['createDateFrom']
                                                    ? this.state['createDateFrom'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="createDateTo"
                                                    label="до"
                                                    placeholder="23.04.2017"
                                                    value={this.state['createDateTo']
                                                    ? this.state['createDateTo'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <TextFieldGroup
                                                    type="text"
                                                    field="terminalNumber"
                                                    label="Номер терминала"
                                                    placeholder="009736240"
                                                    onChange={this.onChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-grouped">
                                            <div className="form-grouped__label">Дата привязки терминалов</div>
                                            <div className="form-grouped__row">
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="bindingDateFrom"
                                                    label="от"
                                                    placeholder="23.04.2016"
                                                    value={this.state['bindingDateFrom']
                                                    ? this.state['bindingDateFrom'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                                <TextFieldGroup
                                                    type="text"
                                                    date
                                                    field="bindingDateTo"
                                                    label="до"
                                                    placeholder="23.04.2017"
                                                    value={this.state['bindingDateTo']
                                                    ? this.state['bindingDateTo'].value
                                                    : ''}
                                                    onChange={this.onChangeDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <TextFieldGroup
                                            type="text"
                                            field="acquirerBnak"
                                            label="Банк-эквайер"
                                            placeholder="Альфа-банк"
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