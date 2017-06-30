import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

class SeclectFieldGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: null
        }

        this.handleChange = this
            .handleChange
            .bind(this);
    }
    handleChange(currentOption) {
        const {field, value, onChange} = this.props;

        if (currentOption.value != value) {
            onChange({
                target: {
                    name: field,
                    value: currentOption.value
                }
            })
        }
    }
    render() {
        const {field, label, value, options, searchable=false} = this.props;
        
        return (
            <div className="form-group">
                <label
                    className={classNames('form-group__label', {'focused': this.state.isFocused})}
                    htmlFor={field}>{label}</label>

                <div className="form-group__field--wrap">
                    <Select
                        value={value}
                        options={options}
                        searchable={searchable}
                        clearable={false}
                        className="form-group__select"
                        onChange={this.handleChange}
                        onFocus={() => this.setState({isFocused: true})}
                        onBlur={() => this.setState({isFocused: false})}/>
                </div>
            </div>
        );
    }
}

export default SeclectFieldGroup;