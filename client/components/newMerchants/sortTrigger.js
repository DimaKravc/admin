import React from 'react';
import classNames from 'classnames';

export default ({text, field, event, state}) => {
    return (
        <a
            href="#"
            data-sort={field}
            className={classNames('data-table__sort-trigger',
                        {'sorted': state.currentSort === field,
                         'sorted--asc': state.currentSortDirection === 'ASC',
                         'sorted--desc': state.currentSortDirection === 'DESC'})}
            onClick={event}>
            <i className="material-icons up">keyboard_arrow_up</i>
            <i className="material-icons down">keyboard_arrow_down</i>
            {text}
        </a>
    )
}