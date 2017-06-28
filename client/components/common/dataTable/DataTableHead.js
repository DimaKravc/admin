import React from 'react';
import classNames from 'classnames';

class DataTableHead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getSortOrder(sortList, dataIndex, sortable) {
        if (!sortable) return false;

        const result = sortList.filter(sortObj=>{
            return sortObj.sortIdex === dataIndex;
        });
        
        if (result.length) {
            return result[0].order
        } else {
            return false
        }
    }

    render() {
        const {colGroups, sortList, children, callback} = this.props;

        const rowCount = Math.max(...React.Children.map(this.props.children, elm => (elm && elm.props.row)
            ? Number(elm.props.row)
            : 0));
        const rows = [];

        React
            .Children
            .forEach(children, (elm, key) => {
                if (elm === null || elm === undefined) {
                    // Skip null or undefined elements.
                    return;
                }
                const {dataIndex, sortable} = elm.props;
                const sort = this.getSortOrder(sortList, dataIndex, sortable);
                
                const rowIndex = elm.props.row
                    ? Number(elm.props.row)
                    : 0;
                const rowSpan = elm.props.rowSpan
                    ? Number(elm.props.rowSpan)
                    : 1;

                if (rows[rowIndex] === undefined) {
                    rows[rowIndex] = [];
                }
                rows[rowIndex].push(React.cloneElement(elm, {key, sort, callback}));
            })

        const trs = rows.map((row, indexRow) => {
            return (
                <tr key={indexRow}>
                    {row}
                </tr>
            );
        });

        return (
            <div className={classNames('data-table__head--container')}>
                <table className={classNames('data-table__head')}>
                    {React.cloneElement(colGroups)}
                    <thead>
                        {trs}
                    </thead>
                </table>
            </div>
        )
    };
};

export default DataTableHead;