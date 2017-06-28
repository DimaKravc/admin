import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {getAction} from '../../../actions/apiActions'

import Const from './Const';
import Util from './util';
import {DataTableStore} from './DataTableStore';
import DataToolBar from './DataToolBar';
import DataTableHead from './DataTableHead';
import DataTableBody from './DataTableBody';
import DataTablePagination from './pagination/index';

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.store = new DataTableStore(this.props.data
            ? this.props.data
            : [])
        this.store.isPagination = this.props.pagination;
        this.state = {
            isLoadingData: null,
            isEditMode: null,
            isSearchMode: null,
            isFilterMode: null,
            data: this.getTableData(),
            currPage: 1,
            sizePerPage: this.props.paginationOptions.sizePerPage || Const.SIZE_PER_PAGE_LIST[0]
        };

        this.handleEdit = this
            .handleEdit
            .bind(this);
        this.handleSearch = this
            .handleSearch
            .bind(this);
        this.handleSort = this
            .handleSort
            .bind(this);
        this.handleChangePage = this
            .handleChangePage
            .bind(this);
    }

    componentDidMount() {
        const {dataSource, dataSourceParams} = this.props;

        if (dataSource) {
            this.setState({isLoadingData: true});
            this
                .props
                .getAction(dataSource, dataSourceParams)
                .then(res => {
                    if (res.data) {
                        const resObj = JSON.parse(res.data);
                        this.store = new DataTableStore(resObj);
                        this.setState({
                            isLoadingData: false,
                            data: this.getTableData()
                        });
                    }
                }, err => {
                    this.setState({isLoadingData: false});
                })
        }
    }

    handleEdit(event) {
    }

    handleSearch(value) {}

    handleSort(order, sortField) {
        console.log(order, sortField)
    }

    handleChangePage(page, sizePerPage) {
        const result = this
            .store
            .page(page, sizePerPage)
            .get();

        this.setState({data: result, currPage: page, sizePerPage: sizePerPage});
    }

    getTableData() {
        let result = [];
        const {pagination, paginationOptions} = this.props;

        if (pagination) {
            let page;
            let sizePerPage;
            if (this.store.isChangedPage()) {
                sizePerPage = sizePerPage;
                page = this.state.currPage;
            } else {
                sizePerPage = paginationOptions.sizePerPage || Const.SIZE_PER_PAGE_LIST[0];
                page = 1;
            }
            result = this
                .store
                .page(page, sizePerPage)
                .get();
        } else {
            result = this
                .store
                .get();
        }

        return result;
    }

    render() {
        const {dataTitle, children, pagination, paginationOptions} = this.props;
        const {isLoadingData, data, noDataText, currPage, sizePerPage} = this.state;
        const columns = this.getColumnsDescription(this.props);
        const colGroups = Util.renderColGroup(columns);
        const sortList = this
            .store
            .getSortInfo();
        const dataSize = this
            .store
            .getDataLength();

        return (
            <div
                className={classNames('data-table--container', {'is-loading': isLoadingData})}>
                <div className={classNames('data-table')}>
                    {/*<DataToolBar
                        dataTitle={dataTitle}
                        onEdit={this.handleEdit}
                        onSearch={this.handleSearch}/>*/}
                    <div className="data-table__box">
                        <DataTableHead
                            colGroups={colGroups}
                            sortList={sortList}
                            callback={this.handleSort}>
                            {children}
                        </DataTableHead>
                        {dataSize
                            ? <DataTableBody colGroups={colGroups} data={data} columns={columns}/>
                            : <p>{noDataText
                                    ? noDataText
                                    : Const.NO_DATA}</p>}
                        {pagination && <DataTablePagination
                            currPage={currPage}
                            onChangePage={this.handleChangePage}
                            sizePerPage={sizePerPage}
                            sizePerPageList={paginationOptions.sizePerPageList || Const.SIZE_PER_PAGE_LIST}
                            dataSize={dataSize}/>}
                    </div>
                </div>
            </div>

        )
    }

    getColumnsDescription({children}) {
        let rowCount = 0;
        React
            .Children
            .forEach(children, (column) => {
                if (column === null || column === undefined) {
                    // Skip null and undefined value
                    return;
                }

                if (Number(column.props.row) > rowCount) {
                    rowCount = Number(column.props.row);
                }
            });
        return React
            .Children
            .map(children, (column, key) => {
                if (column === null || column === undefined) {
                    // Return null for empty objects
                    return null;
                }
                const rowIndex = column.props.row
                    ? Number(column.props.row)
                    : 0;
                const rowSpan = column.props.rowSpan
                    ? Number(column.props.rowSpan)
                    : 1;

                if ((rowIndex + rowSpan) === (rowCount + 1)) {
                    return Object.assign({}, column.props)
                }
            });
    }
}

Data.propTypes = {
    tableContainerClass: PropTypes.string,
    tableContainerStyle: PropTypes.object,
    tableClass: PropTypes.string,
    tableStyle: PropTypes.object,
    tableToolBarClass: PropTypes.string,
    tableToolBarStyle: PropTypes.object,
    tableHeadContainerClass: PropTypes.string,
    tableHeadContainerStyle: PropTypes.object,
    tableHeadClass: PropTypes.string,
    tableHeadStyle: PropTypes.object,
    tableBodyContainerClass: PropTypes.string,
    tableBodyContainerStyle: PropTypes.object,
    tableBodyClass: PropTypes.string,
    tableBodyStyle: PropTypes.object,

    cellEdit: PropTypes.shape({mode: PropTypes.string, beforeSaveCell: PropTypes.func, afterSaveCell: PropTypes.func}),
    // selectRow: {} deleteRow: PropTypes.bool,
    search: PropTypes.bool,
    clearSearch: PropTypes.bool,
    filter: PropTypes.shape({lastTen: PropTypes.bool, lastWeek: PropTypes.bool, lastMonth: PropTypes.bool, period: PropTypes.bool}),
    pagination: PropTypes.bool,
    sizePerPage: PropTypes.number,
    sizePerPageList: PropTypes.array,
    showLimit: PropTypes.bool,
    showLimitStep: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        getAction: dispatch(getAction())
    }
}

export default connect(mapStateToProps, {getAction})(Data)