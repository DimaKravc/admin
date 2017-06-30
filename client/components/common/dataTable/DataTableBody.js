import React from 'react';
import classNames from 'classnames';

import TableColumn from './TableColumn';

class DataTableBody extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {colGroups, children, data, columns} = this.props;
        
        let tableRows = data.map((data, key) => {
            const tableColumns = this
                .props
                .columns
                .map((column, i) => {
                    const fieldValue = data[column.dataIndex];
                    if (column.editable && this.state.currentEditCell !== null) {
                        // Edit cell
                    } else {
                        let columnValue = fieldValue && fieldValue.toString();

                        if (column.render && column.render(fieldValue)) {
                            const renderedValue = column.render(fieldValue);

                            if (!React.isValidElement(renderedValue)) {
                                columnValue = (
                                    <div
                                        dangerouslySetInnerHTML={{
                                        __html: renderedValue
                                    }}></div>
                                );
                            } else {
                                columnValue = renderedValue
                            }
                        }
                        return (
                            <TableColumn key={i}>
                                {columnValue}
                            </TableColumn>
                        )
                    }
                });

            return (
                <tr key={key}>
                    {tableColumns}
                </tr>
            )
        })

        return (
            <div className={classNames('data-table__body--container')}>
                <table className={classNames('data-table__body')}>
                    {React.cloneElement(colGroups)}
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTableBody;