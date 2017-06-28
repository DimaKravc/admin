import React from 'react';
import Select from 'react-select';

const DropDown = (props) => {
    const handleSelectChange = (dataObj) => {
        props.callback(dataObj.value)
    }
    const renderOptions = () => {
        const optionsArr = [];
        const {sizePerPageList, dataSize} = props;

        sizePerPageList.every((item, key) => {
            if (item < dataSize) {
                optionsArr.push({value: item, label: item})
            } else if (item == dataSize || item > dataSize) {
                optionsArr.push({value: dataSize, label: 'All'})
                return false
            }

            if (key == sizePerPageList.length - 1 && item < dataSize) 
                optionsArr.push({value: dataSize, label: 'All'})

            return true
        });

        return optionsArr;
    }
    return (
        <div>
            <dl className="pagination__limiter">
                <dt>Показывать на странице</dt>
                <dd>
                    <Select
                        value={props.sizePerPage}
                        options={renderOptions()}
                        searchable={false}
                        clearable={false}
                        onChange={handleSelectChange}/>
                </dd>
            </dl>
        </div>
    );
};

export default DropDown;