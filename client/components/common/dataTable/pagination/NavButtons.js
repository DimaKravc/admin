import React from 'react';
import Ink from 'react-ink';

const NavButtons = (props) => {
    const handleBtnClick = event => {
        event.preventDefault();

        props.callback(event.currentTarget.dataset.dir)
    }
    return (
        <div>
            <button
                className={'pagination__control'}
                disabled={props.currPage == 1}
                data-dir='prev'
                onClick={handleBtnClick}>
                <i className="material-icons">&#xE314;</i>
                <Ink
                    style={{
                    color: '#43484d',
                    width: '34px',
                    height: '34px',
                    left: '50%',
                    top: '50%',
                    margin: '-17px 0 0 -17px'
                }}/>
            </button>
            <button
                className={'pagination__control'}
                disabled={Math.ceil(props.dataSize / props.sizePerPage) == props.currPage}
                data-dir='next'
                onClick={handleBtnClick}>
                <i className="material-icons">&#xE315;</i>
                <Ink
                    style={{
                    color: '#43484d',
                    width: '34px',
                    height: '34px',
                    left: '50%',
                    top: '50%',
                    margin: '-17px 0 0 -17px'
                }}/>
            </button>
        </div>
    );
};

export default NavButtons;