import React from 'react';

export default class SelectField extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
            value: "Мерчант 1"
        };

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        console.log(e)
    }
    
    render() {
        return(
            <div className="form-group">
                <label className="form-group__label" htmlFor={this.props.id}>{this.props.labelText}</label>

                <div className="form-group__field--wrap">
                    <div className="select">
                        <div className="select__field" onClick={this.handleSelect}>
                            <span className="select__value">shop.ru</span>
                        </div>
                        <div className="select__dropdown">
                            <ul className="select__options-list">
                                <li className="select__option">Мерчант 1</li>
                                <li className="select__option">Мерчант 2</li>
                                <li className="select__option">Мерчант 3</li>
                                <li className="select__option">Мерчант 4</li>
                                <li className="select__option">Мерчант 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}