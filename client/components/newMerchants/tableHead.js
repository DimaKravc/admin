import React from 'react';

import SortTrigger from './sortTrigger';

export default class TableHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSort: null,
            currentSortDirection: null
        };

        this.sort = this.sort.bind(this);
    }

    sort(event) {
        event.preventDefault();

        const {update, data} = this.props;
        const {currentSort, currentSortDirection} = this.state;
        const sortType = event.target.dataset.sort;
        let isSorted = currentSort === sortType;
        let direction;

        // ASC: Filter in ascending ↓
        // DESC: Filter in descending ↑
        // Is first click by trigger
        if (isSorted) {
            // Change the value of the @currentSortDirection to the reverse
            direction = currentSortDirection === 'ASC' ? -1 : 1;
        } else {
            // If the first click on the trigger, filter in ascending
            direction = 1
        }

        const sorted = data.sort((a, b) => {
            if (a[sortType] === b[sortType]) {
                return 0;
            }

            if (typeof data[0][sortType] === Number) {
                return a[sortType] - b[sortType] ? direction : direction * -1;
            } else {
                return a[sortType] > b[sortType] ? direction : direction * -1;
            }

        });

        this.setState({
            currentSort: sortType,
            // If the trigger was clicked and the @currentSortDirection is to equal 'ASC' return 'DESC'
            // in other cases return 'ASC'
            currentSortDirection: isSorted && currentSortDirection === 'ASC' ? 'DESC' : 'ASC'
        });

        update(sorted)
    }

    render() {
        return (
            <thead>
            <tr>
                <th>
                    <SortTrigger
                        text="Дата регистрации"
                        field="registrationDate"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Наименование мерчанта"
                        field="organizationName"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Адрес электронной почты"
                        field="email"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Партнер"
                        field="partner"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Промо-код"
                        field="promocode"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Источник трафика"
                        field="trafficSource"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>
                    <SortTrigger
                        text="Статус"
                        field="clientStatus"
                        event={this.sort}
                        state={this.state}/>
                </th>
                <th>&nbsp;</th>
            </tr>
            </thead>
        )
    }
}