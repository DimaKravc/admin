import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class DataTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <table>
                <thead>
                {this.props.children}
                </thead>
            </table>
        )
    }
}

DataTable.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    dataSource: PropTypes.string,
    isDataCheck: (props, propName, componentName) => {
        if (!props.data && !props.dataSource) {
            return new Error(
                'At least one of the properties (data|dataSource) must be supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    condensed: PropTypes.bool,
    cellEdit: PropTypes.shape({
        mode: PropTypes.string,
        beforeSaveCell: PropTypes.func,
        afterSaveCell: PropTypes.func
    }),
    // selectRow: {}
    // deleteRow: PropTypes.bool,
    defaultSortName: PropTypes.string,
    defaultSortOrder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

const mapStateToProps = (state) => {
    return {}
};

export default connect(null, null)(DataTable)