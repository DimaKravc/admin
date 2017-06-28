import React from 'react';
import {Route} from 'react-router-dom';

import Content from '../components/container/ContentContainer';
import OverlayContainer from '../components/overlay/index';
import TopBarContainer from '../components/topBar/index';
import SidebarContainer from '../components/sidebar/index';

import SignUpContainer from '../components/signup/index';
import SignInContainer from '../components/signin/index';
import NewMerchantsContainer from '../components/newMerchants/index';

// import PasswordRestorePageContainer from '../components/container/PasswordRestorePageContainer';
// import SearchOperationsContainer from '../components/container/SearchOperationsContainer';
// import MerchantsModerationContainer from '../components/container/MerchantsModerationContainer';

export default class extends React.Component {
    render() {
        return (
            <Route render={({location})=>{
                let path = location.pathname;

                if (path == '/signin') return <SignInContainer />;
                if (path == '/signup') return <SignUpContainer />;

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
                        </Content>
                        <OverlayContainer />
                    </div>
                );
            }}/>
        )
    }
}