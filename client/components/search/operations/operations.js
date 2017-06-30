import React from 'react';

import FilterForm from './filterForm';
import DataTable from '../../common/dataTable/index';
import DataTableHeadColumn from '../../common/dataTable/DataTableHeadColumn';

class Operations extends React.Component {
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
            .getAction('operations', queryOpt)
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
                        <h1 className="page-header__title">Поиск операций</h1>
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
                    dataIndex='paymentDate'
                    title='Дата платежа'/>
                <DataTableHeadColumn
                    dataIndex='paymoID'
                    title='PAYMO ID'/>
                <DataTableHeadColumn
                    dataIndex='paymentPoint'
                    title='Точка оплаты'/>
                <DataTableHeadColumn
                    dataIndex='emailAddress'
                    title='Email плательщика'/>
                <DataTableHeadColumn
                    dataIndex='phoneNumber'
                    title='Телефон плательщика'/>
                <DataTableHeadColumn
                    dataIndex='paymentSum'
                    title='Сумма транзакции'/>
                <DataTableHeadColumn
                    dataIndex='paymentStatus'
                    title='Статус платежа'
                    //render={(status)=>{
                    //    return <i>Dima</i>
                    //}}
                    />
            </DataTable>}
            </div>
        );
    }
}

export default Operations;