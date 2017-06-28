import React from 'react';

import Data from '../common/dataTable/index';
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
            <Data
                dataTitle={'Новые мерчанты'}
                data={data}
                //dataSource={'new-merchants'}
                pagination={true}
                paginationOptions={{
                    sizePerPage: 5,
                    sizePerPageList: [5, 10, 15, 20, 25, 50]
                }}
                >
                <DataTableHeadColumn
                    dataIndex='registrationDate'
                    sortable={true}
                    title='Дата регистрации'/>
                <DataTableHeadColumn
                    dataIndex='organizationName'
                    title='Наименование мерчанта'/>
                <DataTableHeadColumn
                    dataIndex='email'
                    title='Адрес электронной почты'/>
                <DataTableHeadColumn
                    dataIndex='partner'
                    title='Партнер'/>
                <DataTableHeadColumn
                    dataIndex='promocode'
                    title='Промо-код'/>
                <DataTableHeadColumn
                    dataIndex='trafficSource'
                    title='Источник трафик'/>
                <DataTableHeadColumn
                    dataIndex='clientStatus'
                    title='Статус'
                    //render={(status)=>{
                    //    return <i>Dima</i>
                    //}}
                    />
            </Data>
        )
    }
}

export default NewMerchants;