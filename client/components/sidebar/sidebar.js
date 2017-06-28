import React from 'react';
import classNames from 'classnames';

import SiteMenu from './siteMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topOffset: 64,
            currentTopOffset: 64
        };
    }

    setContainerTopOffset() {
        if (!this.props.topBar.isSticky) {
            window.addEventListener('scroll', ()=> {
                let currentScroll = this.state.topOffset - window.pageYOffset;
                this.setState({currentTopOffset: currentScroll > 0 ? currentScroll : 0});
            })
        }
    }

    componentDidMount() {
        this.setContainerTopOffset();

        let {breakPoint, changeSidebar, changeOverlay} = this.props;
        window.addEventListener('resize', ()=> {
            if (document.documentElement.clientWidth < breakPoint) {
                changeSidebar('hide');
                changeOverlay('self');
            }
        })
    }

    render() {
        return (
            <aside
                className={classNames('sidebar', {'sidebar--visible': this.props.sidebar.isShow})}
                style={{top: this.state.currentTopOffset + "px"}}>
                <SiteMenu {...this.props}/>
                <div className="brand">
                    <img
                        className="brand__img"
                        src={require('../../assets/images/logo-dark.svg')}
                        alt="Paymo Admin"/>
                </div>
            </aside>
        )
    }
}

export default Sidebar;