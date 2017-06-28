import React from 'react';

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleChangeMenu = this.handleChangeMenu.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    // returns the closest "element" that has class "classname"
    closest(element, classname) {
        if (element.classList.contains(classname)) {
            return element;
        }
        if (!element.parentNode.classList) {
            return false
        }
        return element.parentNode && this.closest(element.parentNode, classname);
    }

    // returns the depth of the "element" relative to element with id="id"
    // for this calculation only parents with classname = "waypoint" are considered
    getLevelDepth(element, id, waypoint, cnt) {
        cnt = cnt || 0;
        if (element.id.indexOf(id) >= 0) return cnt;
        if (element.classList.contains(waypoint)) {
            ++cnt;
        }
        return element.parentNode && this.getLevelDepth(element.parentNode, id, waypoint, cnt);
    }

    init() {
        this.el = document.querySelector('.site-nav');
        this.levels = Array.prototype.slice.call(this.el.querySelectorAll('.site-nav__item--has-submenu'));
        // save the depth of each of these ".site-nav__item--has-submenu" elements
        this.levels.forEach((level) => {
            level.setAttribute('data-level', this.getLevelDepth(level, this.el.id, 'site-nav__item--has-submenu'));
        });
    }

    // close menus
    closeMenu(element) {
        // returns array of open menus nested to "element"
        let activeElements = Array.prototype.slice.call(element.parentNode.querySelectorAll('.site-nav__item--active'));

        // remove active class "site-nav__item--active" at the open menus nested to "element"
        activeElements.forEach((activeElement)=> {
            activeElement.classList.remove('site-nav__item--active');
        })
    }

    handleChangeMenu(event) {
        event.preventDefault();

        let element = event.target;
        let elementParent = this.closest(element, 'site-nav__item--has-submenu');
        let isActive = elementParent.classList.contains('site-nav__item--active');
        let {siteOverlay, changeOverlay, changeSidebar} = this.props;
        
        this.closeMenu(elementParent);

        if (!isActive) {
            elementParent.classList.add('site-nav__item--active');
        }

        if (elementParent.dataset.level == 1) {
            if (!isActive && !siteOverlay.isShow) {
                changeOverlay('show');
                changeSidebar('show', 'show')
            }
            if (isActive) {
                changeOverlay('hide')
            }
        }
    }

    handleBack(event) {
        let element = event.target;
        let elementParent = this.closest(element, 'site-nav__item--has-submenu');

        this.closeMenu(elementParent.parentNode)
    }

    componentDidUpdate() {
        if (!this.props.sidebar.isSubMenuShow) {
            this.closeMenu(this.el);
        }
    }

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <nav id="site-nav" className="site-nav">
                <ul className="site-nav__list">
                    <li className="site-nav__item site-nav__item--has-submenu">
                        <a
                            className="site-nav__link"
                            href="#"
                            onClick={this.handleChangeMenu}>
                            Item 1
                        </a>
                        <div className="site-nav__submenu">
                            <a
                                className="site-nav__link site-nav__link-back"
                                href="#"
                                onClick={this.handleBack}>
                                Back
                            </a>
                            <ul className="site-nav__list">
                                <li className="site-nav__item">
                                    <a className="site-nav__link" href="#">Sub item 1</a>
                                </li>
                                <li className="site-nav__item site-nav__item--has-submenu">
                                    <a
                                        className="site-nav__link"
                                        href="#"
                                        onClick={this.handleChangeMenu}>
                                        Sub item2
                                    </a>

                                    <div className="site-nav__submenu">
                                        <a
                                            className="site-nav__link site-nav__link-back"
                                            href="#"
                                            onClick={this.handleBack}>
                                            Back
                                        </a>

                                        <ul className="site-nav__list">
                                            <li className="site-nav__item site-nav__item--has-submenu">
                                                <a
                                                    className="site-nav__link"
                                                    href="#"
                                                    onClick={this.handleChangeMenu}>
                                                    Sub sub item 1</a>

                                                <div className="site-nav__submenu">
                                                    <a
                                                        className="site-nav__link site-nav__link-back"
                                                        href="#"
                                                        onClick={this.handleBack}>
                                                        Back
                                                    </a>

                                                    <ul className="site-nav__list">
                                                        <li className="site-nav__item">
                                                            <a className="site-nav__link" href="#">Sub sub sub item1</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="site-nav__item">
                                    <a className="site-nav__link" href="#">Sub item 3</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="site-nav__item site-nav__item--has-submenu">
                        <a className="site-nav__link" href="#" onClick={this.handleChangeMenu}>Item 2</a>

                        <div className="site-nav__submenu">
                            <a className="site-nav__link site-nav__link-back" href="#"
                               onClick={this.handleBack}>Back</a>

                            <ul className="site-nav__list">
                                <li className="site-nav__item">
                                    <a className="site-nav__link" href="#">Sub item1</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default SiteMenu;