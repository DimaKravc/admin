import React from 'react';
import Select from 'react-select';

export default class TablePagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemDisplay: null
        };

        this.handleChangeLimit = this.handleChangeLimit.bind(this);
    }

    handleChangeLimit(value) {
        this.setState({itemDisplay: value.value});

        this.props.update({limit: value.value})
    }

    render() {
        const {page, limit, merchantsQtt, data, handlePagePrevTrigger, handlePageNextTrigger} = this.props;

        if (!data) {
            return null;
        }

        const {itemDisplay} = this.state;

        const selectOptions = [];
        if (merchantsQtt >= 5) {
            selectOptions.push({value: 5, label: 5});
        }
        if (merchantsQtt >= 10) {
            selectOptions.push({value: 10, label: 10});
        }
        if (merchantsQtt >= 15) {
            selectOptions.push({value: 15, label: 15});
        }
        if (merchantsQtt >= 25) {
            selectOptions.push({value: 25, label: 25});
        }
        if (merchantsQtt >= 50) {
            selectOptions.push({value: 50, label: 50});
        }
        if (merchantsQtt > 50) {
            selectOptions.push({value: 'all', label: 'All'});
        }

        return (
            <div className="pagination">
                <dl className="pagination__limiter">
                    <dt>Показывать на странице</dt>
                    <dd>
                        <Select
                            value={itemDisplay ? itemDisplay : limit}
                            options={selectOptions}
                            searchable={false}
                            clearable={false}
                            onChange={this.handleChangeLimit}
                        />
                    </dd>
                </dl>
                <span className="pagination__view">
                    {page === 1 ? 1 : limit * (page - 1) + 1}-{limit * page} из {merchantsQtt}
                </span>
                <button
                    className="pagination__control"
                    onClick={handlePagePrevTrigger}
                    disabled={page === 1}
                >
                    <i className="material-icons">&#xE314;</i>
                </button>
                <button
                    className="pagination__control"
                    onClick={handlePageNextTrigger}>
                    <i className="material-icons">&#xE315;</i>
                </button>
            </div>
        )
    }
}