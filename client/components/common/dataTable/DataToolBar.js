import React from 'react';
import classNames from 'classnames';
import Const from './Const';
import Ink from 'react-ink';

import Button from '../Button';

class DataToolBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeSearch = this
            .handleChangeSearch
            .bind(this);
        this.handleClearSearch = this
            .handleClearSearch
            .bind(this)
    }
    handleChangeSearch(event) {
        event.preventDefault();

        this
            .props
            .onSearch(event.target.value);
    }
    handleClearSearch(event) {
        event.preventDefault();

        this.searchInput.value = '';

        this
            .props
            .onSearch('');
    }
    renderEditTool() {
        const {editable, editTriggerText, onEdit} = this.props;

        if (!editable) 
            return null;
        
        return (
            <div className="data-table__edit-tool edit-tool">
                <button className='edit-tool__btn' onKeyUp={onEdit}>
                    <i className="material-icons">&#xE254;</i>
                    <span className="edit-tool__btn__text">
                        {editTriggerText
                            ? editTriggerText
                            : Const.EDIT_TOOL_TEXT}
                    </span>
                </button>
            </div>
        )
    }
    renderAddTool() {
        const {expansible, addTriggerText} = this.props;

        if (!expansible) 
            return null;
        
        return (
            <div className="data-table__add-tool">
                <Button
                    className='style-1'
                    wave
                    text={addTriggerText
                    ? addTriggerText
                    : Const.ADD_TOOL_TEXT}/>
            </div>
        )
    }
    renderSearchTool() {
        const {searchable, searchPlaceholder, clearSearch} = this.props;

        if (!searchable) 
            return null;
        
        return (
            <div className='data-table__search-tool search-tool'>
                <input
                    ref={(input) => {
                    this.searchInput = input
                }}
                    className='search-tool__field'
                    type='text'
                    placeholder={searchPlaceholder
                    ? searchPlaceholder
                    : Const.SEARCH_TOOL_PLACEHOLDER}
                    onChange={this.handleChangeSearch}/> {(() => {
                    if (clearSearch) {
                        return (
                            <button className='search-tool__clear-btn' onClick={this.handleClearSearch}>
                                <i className='material-icons'>&#xE14C;</i>
                                <Ink
                                    style={{
                                    color: '#43484d',
                                    width: '64px',
                                    height: '64px',
                                    left: '50%',
                                    top: '50%',
                                    margin: '-32px 0 0 -32px'
                                }}/>
                            </button>
                        )
                    }
                })()}
            </div>
        )
    }
    renderFilterTool() {
        const {filterable} = this.props;

        if (!Object.keys(filterable).length) 
            return null;
        
        return (
            <div className='data-table__filter-tool filter-tool'>
                {filterable.last && <div className='filter-tool__item'>
                    <button className='filter-tool__btn'>
                        {filterable.last.triggerText
                            ? filterable.last.triggerText
                            : Const.FILTER_TOOL_LAST + filterable.last.amount}
                        <Ink
                            style={{
                            color: '#00acc1'
                        }}/>
                    </button>
                </div>}

                {filterable.week && <div className='filter-tool__item'>
                    <button className='filter-tool__btn'>
                        {filterable.week.triggerText
                            ? filterable.week.triggerText
                            : Const.FILTER_TOOL_LAST_WEEK}
                        <Ink
                            style={{
                            color: '#00acc1'
                        }}/>
                    </button>
                </div>}

                {filterable.month && <div className='filter-tool__item'>
                    <button className='filter-tool__btn'>
                        {filterable.month.triggerText
                            ? filterable.month.triggerText
                            : Const.FILTER_TOOL_LAST_MONTH}
                        <Ink
                            style={{
                            color: '#00acc1'
                        }}/>
                    </button>
                </div>}

                {filterable.all && <div className='filter-tool__item'>
                    <button className='filter-tool__btn'>
                        {filterable.all.triggerText
                            ? filterable.all.triggerText
                            : Const.FILTER_TOOL_ALL}
                        <Ink
                            style={{
                            color: '#00acc1'
                        }}/>
                    </button>
                </div>}

                {filterable.period && <div className='filter-tool__item filter-tool__period'>
                    <button className='filter-tool__btn'>
                        {filterable.period.icon && <i className="material-icons">&#xE916;</i>}
                        {filterable.period.triggerText
                            ? filterable.period.triggerText
                            : Const.FILTER_TOOL_PERIOD}
                        <Ink
                            style={{
                            color: '#00acc1'
                        }}/>
                    </button>
                </div>}
            </div>
        )
    }
    render() {
        const {
            tableToolBarClass,
            tableToolBarStyle,
            dataTitle,
            editable,
            expansible,
            searchable,
            filterable
        } = this.props;

        if (!editable && !expansible && !searchable && !filterable && !dataTitle) 
            return null;
        
        const editTool = this.renderEditTool();
        const addTool = this.renderAddTool();
        const searchTool = this.renderSearchTool();
        const filterTool = this.renderFilterTool();

        return (
            <div
                className={classNames('data-table__toolbar', {[tableToolBarClass]: tableToolBarClass})}
                style={tableToolBarStyle}>
                <div className="data-table__toolbar__col">
                    <h2 className='data-table__title'>{dataTitle}</h2>
                    {editTool}
                </div>
                <div className="data-table__toolbar__col">
                    {searchTool}
                    {addTool}
                    {filterTool}
                </div>
            </div>
        )
    }
}

export default DataToolBar;