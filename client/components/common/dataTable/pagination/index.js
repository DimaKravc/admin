import React, {Component} from 'react';

import DropDown from './DropDown.js';
import CurrentPosView from './CurrentPosView';
import NavButtons from './NavButtons';

class DataTablePagination extends Component {
    constructor(props) {
        super(props);

        this.handleChangePage = this
            .handleChangePage
            .bind(this);
        this.handleChangeLimit = this
            .handleChangeLimit
            .bind(this);
    }

    handleChangePage(direction) {
        const {currPage, sizePerPage, onChangePage} = this.props;
        let page = currPage;

        switch (direction) {
            case 'prev':
                page -= 1;
                break;
            case 'next':
                page += 1;
                break;
        }

        onChangePage(page, sizePerPage);
    }

    handleChangeLimit(value) {
        const {dataSize, currPage, sizePerPage, onChangePage} = this.props;

        if (value == sizePerPage) 
            return;
        
        const totalPage = Math.ceil(dataSize / value);
        let page = currPage;

        if (currPage > totalPage) {
            page = totalPage;
        }

        onChangePage(page, value)
    }

    render() {
        const {dataSize, currPage, sizePerPage, sizePerPageList} = this.props;

        if (!dataSize) 
            return null;
        
        return (
            <div className="pagination">
                <DropDown
                    dataSize={dataSize}
                    sizePerPage={sizePerPage}
                    sizePerPageList={sizePerPageList}
                    callback={this.handleChangeLimit}/>
                <CurrentPosView
                    dataSize={dataSize}
                    sizePerPage={sizePerPage}
                    currPage={currPage}/>
                <NavButtons
                    dataSize={dataSize}
                    sizePerPage={sizePerPage}
                    currPage={currPage}
                    callback={this.handleChangePage}/>
            </div>
        );
    }
}

export default DataTablePagination;