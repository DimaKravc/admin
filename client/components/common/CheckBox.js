import React from 'react';

const CheckBox = (props) => {
    return (
        <div className="checkbox checkbox--wrap">
            <input className="checkbox__input" type="checkbox" id={props.id} onChange={props.callback}/>
            <label htmlFor={props.id} className="checkbox__label">
                <div className="checkbox__checked-icon--wrap">
                    <i className="checkbox__checked-icon" />
                </div> 
                {props.labelText}
            </label>
        </div>
    )
};

export default CheckBox;