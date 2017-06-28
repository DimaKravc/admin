import React from 'react';

const CurrentPosView = (props) => {
    const getCurrentPos = () => {
        const {currPage, sizePerPage, dataSize} = props;

        if (currPage == 1) {
            return `1-${sizePerPage}`
        } else if (dataSize % sizePerPage == 1 && Math.ceil(dataSize / sizePerPage) == currPage) {
            return dataSize
        } else {
            return `${(currPage - 1) * sizePerPage + 1}-${Math.min(currPage * sizePerPage, dataSize)}`
        }
    }
    return (
        <div>
            <span className="pagination__view">
                {getCurrentPos()} из {props.dataSize}
            </span>
        </div>
    );
};

export default CurrentPosView;