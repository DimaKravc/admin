import React from 'react';

const CheckBox = (props) => {
    const handleChange = (event) => {
        const {field, onChange} = props;

        if (onChange) {
            onChange({
                target: {
                    name: field,
                    value: event.target.checked
                }
            })
        }
    }
    return (
        <div className="checkbox">
            <input
                className="checkbox__input"
                type="checkbox"
                id={props.field}
                onChange={handleChange}
                checked={props.checked}/>
            <label htmlFor={props.field} className="checkbox__label">
                <div className="checkbox__checked-icon--wrap">
                    <i className="checkbox__checked-icon"/>
                </div>
                {props.label}
            </label>
        </div>
    )
};

export default CheckBox;