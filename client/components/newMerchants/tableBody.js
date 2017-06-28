import React from 'react';

import TableRow from './tableRow';

export default (props) => {
    if (!props.data) {
        return null
    }

    console.log(props, '========1========', props.data[props.data.length - 1].bankName)


    let rowsSelection = [];
    if (props.limit == props.data.length) {
        rowsSelection = props.data
    } else {
        let start = props.page == 1 ? 0 : props.page == 2 ? props.limit : props.limit * (props.page - 1);
        let end = start + props.limit;
        rowsSelection = props.data.slice(start, end);
    }

    console.log(rowsSelection, '========2========')

    const row = rowsSelection.map((item, i) => {
        return (
            <TableRow user={item} key={i}/>
        )
    });

    return (
        <tbody>
        {row}
        </tbody>
    )
}