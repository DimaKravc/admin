import Const from './Const';

export class DataTableStore {

    constructor(data) {
        this.data = data;
        this.filteredData = null;
        this.isOnFilter = false;
        this.filterObj = null;
        this.searchText = null;
        this.sortList = [];
        this.pageObj = {};
    }

    getSortInfo() {
        return this.sortList
    }

    setSortInfo(order, sortField) {
        console.log(order, sortField)
    }

    get() {
        const data = this.getCurrentDisplayData();

        if (!this.isPagination) {
            return data
        } else {
            const result = [];
            for (let i = this.pageObj.start; i <= this.pageObj.end; i++) {
                result.push(data[i]);
                if (i + 1 === data.length) 
                    break;
                }
            return result;
        }

    }

    getCurrentDisplayData() {
        return this.data;
    }

    getDataLength() {
        return this
            .getCurrentDisplayData()
            .length
    }

    page(page, sizePerPage) {
        this.pageObj.end = page * sizePerPage - 1;
        this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
        return this;
    }

    isChangedPage() {
        return this.pageObj.start && this.pageObj.end
            ? true
            : false;
    }
}