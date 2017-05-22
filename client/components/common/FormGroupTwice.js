import React from 'react';

const FormGroup = (data) => {
    let findAncestor = (el, cls) => {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    };
    let handleFocus = (e) => {
        let parentClassName = 'form-group__field--wrap';
        let parent = findAncestor(e.target, parentClassName);
        let label = document.querySelector('label[for="'+ e.target.id +'"]');

        label.dataset.focus = label.dataset.focus === 'true' ? 'false' : 'true';
        parent.dataset.focus = parent.dataset.focus === 'true' ? 'false' : 'true';
    };
    return (
        <div className="form-group">
            <label className="form-group__label">{data.labelText}</label>

            <div className="form-group__row">
                <div className="form-group__col">
                    <label className="form-group__label" htmlFor={data.id}>{data.fieldCaption}</label>
                    <div className="form-group__field--wrap">
                        <input className="form-group__field"
                               type={data.type}
                               id={data.id}
                               name={data.name || data.id}
                               placeholder={data.placeholderText}
                               onFocus={handleFocus}
                               onBlur={handleFocus}
                        />
                    </div>
                </div>
                <div className="form-group__col">
                    <label className="form-group__label" htmlFor={data.id2}>{data.fieldCaption2}</label>
                    <div className="form-group__field--wrap">
                        <input className="form-group__field"
                               type={data.type2}
                               id={data.id2}
                               name={data.name2 || data.id2}
                               placeholder={data.placeholderText2}
                               onFocus={handleFocus}
                               onBlur={handleFocus}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormGroup;