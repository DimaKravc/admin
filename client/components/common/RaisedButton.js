import React from 'react';

const RaisedButton = (data) => {
    return (
        <button
            type="submit"
            className={data.className + " button"}
        >
            <div className="button__inner-overlay">
                <span className="button__inner">{data.text}</span>
            </div>
        </button>
    )
};

export default RaisedButton;