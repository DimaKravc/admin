import React from 'react';

import TableHead from './tableHead';
import TableBody from './tableBody';
import TablePagination from './tablePagination';

class NewMerchantsExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            data: [],
            totalRows: 0,
            errors: {}
        };

        this.initialData = null;
        this.setSortedData = this.setSortedData.bind(this);
        this.setPaginationOpt = this.setPaginationOpt.bind(this);
        this.setPagePrev = this.setPagePrev.bind(this);
        this.setPageNext = this.setPageNext.bind(this);

    }

    componentWillMount() {
        let {limit, page} = this.state;

        this.props.getAction('new-merchants', {limit: limit, page: page}).then(res=> {
            if (res.data) {
                let responseData = JSON.parse(res.data.merchants);

                this.setState({
                    data: responseData,
                    merchantsQtt: res.data.merchantsQtt
                })
            }
        }, err=> {
            this.setState({errors: {data: err}})
        })
    }

    setSortedData(data) {
        this.setState(data)
    }

    setPagePrev() {
        this.setState((currentState)=> {
            return {
                // Не даем переключиться ниже первой страницы.
                page: currentState.page != 1 ? currentState.page - 1 : 1
            }
        })
    }

    setPageNext() {
        let {limit, page, data, merchantsQtt} = this.state;

        // Прибалвяем страеницу.
        let nextPage = page + 1;

        // Проверяем, не выйдет ли следующая страница за границы данных хранящихся на сервере.
        // if (nextPage * limit > merchantsQtt) {
        //     return false
        // }

        // Проверяем остаётся ли следующая страница в границах уже загруженных данных.
        if (nextPage * limit <= data.length) {
            this.setState({
                page: nextPage
            });

            return null
        }

        this.props.getAction('new-merchants', {limit: limit, page: nextPage}).then(res=> {
            if (res.data) {
                let responseData = JSON.parse(res.data.merchants);

                this.setState((currentState)=> {
                    return {
                        data: currentState.data.concat(responseData),
                        page: nextPage,
                        limit: limit * nextPage > merchantsQtt ? merchantsQtt - limit * page : limit
                    }
                })
            }
        }, err=> {
            this.setState({errors: {data: err}})
        })
    }

    setPaginationOpt(option) {
        const {limit, page, data, merchantsQtt} = this.state;

        if (option.limit) {
            if (option.limit * page > data.length) {
                this.props.getAction('new-merchants', {limit: option.limit, page: page}).then(res=> {
                    if (res.data) {
                        let responseData = JSON.parse(res.data.merchants);
                        this.setState((currentState)=> {
                            return {
                                data: responseData,
                                limit: option.limit
                            }
                        })
                    }
                }, err=> {
                    this.setState({errors: {data: err}})
                })
            } else {
                this.setState(option)
            }
        }
    }

    render() {
        return (
            <section className="section">
                <header className="section__header">
                    <h2 className="section__title">
                        Новые мерчанты
                    </h2>
                </header>
                <div className="section__primary">
                    <div className="data-view">
                        <div className="data-view__table--wrap">
                            <table className="data-view__table data-table">
                                <TableHead initialData={this.initialData} data={this.state.data}
                                           update={this.setSortedData}/>
                                <TableBody {...this.state}/>
                            </table>
                        </div>
                        <footer className="data-view__footer">
                            <TablePagination
                                {...this.state}
                                update={this.setPaginationOpt}
                                handlePagePrevTrigger={this.setPagePrev}
                                handlePageNextTrigger={this.setPageNext}/>
                        </footer>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewMerchantsExample