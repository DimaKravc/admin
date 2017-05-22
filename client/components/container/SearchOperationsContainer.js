import React from 'react';

import SearchOperations from '../presentational/SearchOperations';

const TEXTS = {
    pageTitle: "Поиск партнеров",
    searchResultTitle: "Результаты поиска"
};

export default class SearchOperationsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advancedSearch: false
        }
    }

    render() {
        return (
            <SearchOperations {...TEXTS} {...this.state}/>
        )
    }
}