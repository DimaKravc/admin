import React from 'react';
import {Route} from 'react-router-dom';

import Content from '../components/container/ContentContainer';
import OverlayContainer from '../components/overlay/index';
import TopBarContainer from '../components/topBar/index';
import SidebarContainer from '../components/sidebar/index';

import SignUpContainer from '../components/signup/index';
import SignInContainer from '../components/signin/index';
import PasswordRestoreContainer from '../components/passwordRestore/index';
import NewMerchantsContainer from '../components/newMerchants/index';
import ModMerchantsContainer from '../components/modMerchants/index';
import OperationsContainer from '../components/search/operations/index';
import MerchantsContainer from '../components/search/merchants/index';
import PartnersContainer from '../components/search/partners/index';
import ShopsContainer from '../components/search/shops/index';

// import PasswordRestorePageContainer from '../components/container/PasswordRestorePageContainer';
// import MerchantsModerationContainer from '../components/container/MerchantsModerationContainer';

export default class extends React.Component {
    render() {
        return (
            <Route render={({location})=>{
                let path = location.pathname;

                if (path == '/signin') return <SignInContainer />;
                if (path == '/signup') return <SignUpContainer />;
                if (path == '/restore') return <PasswordRestoreContainer />;

                if (!localStorage.jwtToken) {
                    this.props.history.push('/signin');
                    return <SignInContainer />;
                }
                return (
                    <div>
                        <TopBarContainer />
                        <SidebarContainer />
                        <Content>
                            {path == '/new-merch' && <NewMerchantsContainer />}
                            {path == '/mod-merch' && <ModMerchantsContainer />}
                            {path == '/search-operations' && <OperationsContainer />}
                            {path == '/search-merchants' && <MerchantsContainer />}
                            {path == '/search-partners' && <PartnersContainer />}
                            {path == '/search-shops' && <ShopsContainer />}
                        </Content>
                        <OverlayContainer />
                    </div>
                );
            }}/>
        )
    }
}