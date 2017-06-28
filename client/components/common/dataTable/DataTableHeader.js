import React from 'react';

class DataTableHeader extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    render() {
       
        return(
            this.props.children
        )
    }
}

export default DataTableHeader;