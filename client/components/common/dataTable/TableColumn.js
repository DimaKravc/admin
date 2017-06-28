import React from 'react';

class TableColumn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {children} = this.props;
        return (
            <td>{children}</td>
        );
    }
}

export default TableColumn;