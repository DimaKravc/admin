import React from 'react';
import classNames from 'classnames';
import Const from './Const';

export default {
    renderSortCaret(order) {
        const orderClass = {
            'sort-indicator__up': order === Const.SORT_ASC,
            'sort-indicator__down': order === Const.SORT_DESC
        };

        return (
            <span
                className="sort-indicator"
                className={classNames('sort-indicator', orderClass)}>
                <i className="material-icons sort-indicator__icon-up">&#xE316;</i>
                <i className="material-icons sort-indicator__icons-down">&#xE313;</i>
            </span>
        );
    },
    renderColGroup(columns) {
        const theader = columns.map((column, i) => {
            const {width, align, className} = column;
            const style = {};

            if (width) {
                const CWidth = !isNaN(width)
                    ? width + 'px'
                    : width;
                style.width = CWidth;
                style.minWidth = CWidth;
            }
            if (align) {
                style.textAlign = align;
            }
            return (<col key={i} style={style} className={className}/>);
        });
        return (
            <colgroup>
                {theader}
            </colgroup>
        );
    }
}