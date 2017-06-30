import React from 'react';
import Const from './Const';
import Util from './util';

class DataTableHeadColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleColumnClick = this
            .handleColumnClick
            .bind(this);
    }

    handleColumnClick(event) {
        event.preventDefault();

        const {sortable, dataIndex, callback} = this.props;
        let {sort: order} = this.props;

        if (!sortable) 
            return;
        
        if (!order) 
            order = Const.SORT_ASC;
        else 
            order = this.props.order === Const.SORT_DESC
                ? Const.SORT_ASC
                : Const.SORT_DESC

        callback(order, dataIndex);
    }

    render() {
        const {title, sortable, sort, rowSpan, colSpan} = this.props;
        let defaultCaret;
        let sortCaret;

        if (sortable) {
            defaultCaret = (
                <span className="sort-indicator">
                    <i className="material-icons sort-indicator__icon-up">&#xE316;</i>
                    <i className="material-icons sort-indicator__icons-down">&#xE313;</i>
                </span>
            );

            sortCaret = sort
                ? Util.renderSortCaret(sort)
                : defaultCaret;
        }
        return (
            <th onClick={this.handleColumnClick} rowSpan={rowSpan} colSpan={colSpan}>
                {title}{sortCaret}
            </th>
        )
    }
}

export default DataTableHeadColumn;