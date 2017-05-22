import React from 'react';

import TopBar from '../presentational/TopBar';

export default class TopBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: "Сводка",
            userName: 'Валерия Никифорова',
            messages: [
                {
                    id: 1,
                    message: 'Технические работы будут проведены с 15:00 до 23:00 15.06.2016'
                },
                {
                    id: 2,
                    message: 'Технические работы будут проведены с 15:00 до 23:00 15.06.2016'
                },
                {
                    id: 3,
                    message: 'Технические работы будут проведены с 15:00 до 23:00 15.06.2016'
                },
                {
                    id: 4,
                    message: 'Технические работы будут проведены с 15:00 до 23:00 15.06.2016'
                }
            ]
        };
    }

    render() {
        return (
            <TopBar {...this.state} />
        )
    }
}