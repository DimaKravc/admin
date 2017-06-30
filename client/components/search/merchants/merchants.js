import React from 'react';

import FilterForm from './filterForm';
import DataTable from '../../common/dataTable/index';
import DataTableHeadColumn from '../../common/dataTable/DataTableHeadColumn';

class Merchants extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSearched: false
        };

        this.getData = this.getData.bind(this);
    }
    getData(queryOpt) {
        this
            .props
            .getAction('new-merchants', queryOpt)
            .then(res => {
                if (res.data) {
                    const resObj = JSON.parse(res.data);
                    this.setState({
                        isSearched: true,
                        data: resObj
                    })
                }
            }, err => {
                //this.setState({isLoadingData: false});
            })
    }
    render() {
        return (
            <div>
                <header className="page-header">
                    <div className="page-header__col">
                        <h1 className="page-header__title">Поиск мерчантов</h1>
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
                <FilterForm onSearch={this.getData}/>
                {this.state.isSearched && <DataTable
                view={{
                    striped: true
                }}
                dataTitle={'Результаты поиска'}
                data={this.state.data}
                pagination={true}
                paginationOptions={{
                    sizePerPage: 5,
                    sizePerPageList: [5, 10, 15, 20, 25, 50]
                }}
                >
                <DataTableHeadColumn
                    dataIndex='paymoMerchantID'
                    title='PAYMO Merchant ID'/>
                <DataTableHeadColumn
                    dataIndex='registrationDate'
                    title='Дата регистрации'/>
                <DataTableHeadColumn
                    dataIndex='organizationType'
                    title='Тип ЮЛ'/>
                <DataTableHeadColumn
                    dataIndex='organizationName'
                    title='Наименование организации'/>
                <DataTableHeadColumn
                    dataIndex='contractHolder'
                    title='Держатель договора'/>
                <DataTableHeadColumn
                    dataIndex='clientStatus'
                    title='Статус клиента'
                    //render={(status)=>{
                    //    return <i>Dima</i>
                    //}}
                    />
            </DataTable>}
            </div>
        );
    }
}

export default Merchants;