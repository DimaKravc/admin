import React from 'react';

import DataTable from '../common/dataTable/index';
import DataTableHeadColumn from '../common/dataTable/DataTableHeadColumn';

class NewMerchants extends React.Component {
    render() {
        const data = [];

        for (let i = 0; i < 11; i++) {
            data.push({
                registrationDate: i,
                organizationName: `my-organization-name-${i}`,
                email: `my-email-address-${i}`,
                partner: `my-partner-name-${i}`,
                promocode: `my-promocode-${i}`,
                trafficSource: `my-trafficSource-${i}`,
                clientStatus: `my-client-status-${i}`
            })
        }

        return (
            <DataTable
                view={{
                striped: true
            }}
                dataTitle={'Новые мерчанты'}
                data={data}
                pagination={true}
                paginationOptions={{
                sizePerPage: 5,
                sizePerPageList: [
                    5,
                    10,
                    15,
                    20,
                    25,
                    50
                ]
            }}>
                <DataTableHeadColumn dataIndex='registrationDate' title='Дата регистрации'/>
                <DataTableHeadColumn
                    dataIndex='organizationName'
                    title='Наименование мерчанта'/>
                <DataTableHeadColumn dataIndex='email' title='Адрес электронной почты'/>
                <DataTableHeadColumn dataIndex='partner' title='Партнер'/>
                <DataTableHeadColumn dataIndex='promocode' title='Промо-код'/>
                <DataTableHeadColumn dataIndex='trafficSource' title='Источник трафик'/>
                <DataTableHeadColumn
                    dataIndex='clientStatus'
                    title='Статус'
                    render={(value) => {
                    let statusClassName;
                    if (value == 'my-client-status-0') {
                        statusClassName = 'active'
                    } else if (value == 'my-client-status-1') {
                        statusClassName = 'connected'
                    } else if (value == 'my-client-status-2') {
                        statusClassName = 'verify'
                    } else if (value == 'my-client-status-3') {
                        statusClassName = 'pending'
                    }
                    return (
                        <div className='merchants-render'>
                            <div className="merchants-render__status">
                                <b className={statusClassName}>{value}</b>
                            </div>
                            <div className="merchants-render__trigger">
                                <i className="material-icons">&#xE7EF;</i>
                            </div>
                        </div>
                    )
                }}/>
            </DataTable>
        )
    }
}

export default NewMerchants;