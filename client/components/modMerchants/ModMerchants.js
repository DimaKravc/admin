import React from 'react';

import DataTable from '../common/dataTable/index';
import DataTableHeadColumn from '../common/dataTable/DataTableHeadColumn';

class ModMerchants extends React.Component {
    render() {
        const data = [];

        for (let i = 0; i < 11; i++) {
            data.push({
                claimDate: `my-claim-date-${i}`,
                registrationDate: i,
                organizationName: `my-organization-name-${i}`,
                email: `my-email-address-${i}`,
                partner: `my-partner-name-${i}`,
                promocode: `my-promocode-${i}`,
                trafficSource: `my-trafficSource-${i}`,
                clientStatus: `my-client-status-${i}`,
                clientCategory: `my-client-categorys-${i}`,
                storeName: `my-store-name-${i}`,
                storeURL: `my-store-url-${i}`
            })
        }

        return (
            <DataTable
                view={{
                striped: true
            }}
                dataTitle={'Ожидающие модерации мерчанты'}
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
                <DataTableHeadColumn dataIndex='claimDate' title='Дата заявки'/>
                <DataTableHeadColumn
                    dataIndex='organizationName'
                    title='Наименование мерчанта'/>
                <DataTableHeadColumn dataIndex='storeName' title='Название магазина'/>
                <DataTableHeadColumn
                    dataIndex='storeURL'
                    title='URL магазина'
                    render={value => {
                    return (
                        <a href="#">{value}</a>
                    )
                }}/>
                <DataTableHeadColumn dataIndex='clientCategory' title='Категория магазина'/>
                <DataTableHeadColumn
                    dataIndex='clientStatus'
                    title='Тип'
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
                        <div className='merchants-mod-render'>
                            <div className="merchants-mod-render__status">
                                <b className={statusClassName}>{value}</b>
                            </div>
                            <div>
                                <div className="merchants-mod-render__trigger accept">
                                    <i className="material-icons">&#xE876;</i>
                                </div>
                                <div className="merchants-mod-render__trigger reject">
                                    <i className="material-icons">&#xE14C;</i>
                                </div>
                            </div>
                        </div>
                    )
                }}/>
            </DataTable>
        )
    }
}

export default ModMerchants;