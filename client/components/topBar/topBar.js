import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeMenu = this.handleChangeMenu.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    static contextTypes: {
        router: PropTypes.object.isRequired
    };

    handleChangeMenu(event) {
        event.preventDefault();

        let {changeSidebar, sidebar, breakPoint, changeOverlay} = this.props;

        sidebar.isShow ? changeSidebar('close', 'close') : changeSidebar('show', 'show');

        if (window.innerWidth < breakPoint) {
            if (sidebar.isShow) {
                changeOverlay('hide');
            } else {
                changeOverlay('show');
            }
        }
    }

    handleLogout(event) {
        event.preventDefault();

        this.props.logout();
        this.context.router.history.push('/signin')
    }

    render() {
        let {topBar, sidebar, auth} = this.props;
        return (
            <header className={classNames('header', {'header--sticky': topBar.isSticky})}>
                <div className="header__col">
                    <button
                        className={classNames('side-menu-toggle', {'side-menu-toggle--active': sidebar.isShow})}
                        onClick={this.handleChangeMenu}
                    >
                        <span className="side-menu-toggle__inner">
                            <i className="side-menu-toggle__icon"/>
                        </span>
                    </button>
                    <h2 className="page-headline">Сводка</h2>
                </div>
                <div className="header__col">
                    <div className="user">
                        <span className="user__icon"
                              style={{backgroundImage: 'url('+ require('../../assets/images/userpic.svg') +')'}}
                        />
                        <span className="user__name">{auth.user.name + ' ' + auth.user.lastName}</span>
                        <div className="user__dropdown user-options">
                            <ul className="user-options__list">
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#"><i className="dollar-icon"/> Финансы</a>
                                </li>
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#"><i className="gear-icon"/> Настройки</a>
                                </li>
                                <li className="user-options__item">
                                    <a className="user-options__link" href="#" onClick={this.handleLogout}>
                                        <i className="out-icon"/> Выйти изпрофиля
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-notifications">
                        <div className="user-notifications__bell">
                            <i className="user-notifications__bell-icon"/>
                            <span className="user-notifications__count">22</span>
                        </div>
                        <div className="user-notifications__dropdown notifications">
                            <ul className="notifications__list">
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с
                                        15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с
                                        15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с
                                        15:00 до 23:00 15.06.2016</a>
                                </li>
                                <li className="notifications__item">
                                    <a className="notifications__link" href="#">Технические работы будут проведены с
                                        15:00 до 23:00 15.06.2016</a>
                                </li>
                            </ul>
                            <a className="notifications__show-all" href="#">Все уведомления</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

TopBar.contextTypes = {
    router: PropTypes.object.isRequired
};

export default TopBar;