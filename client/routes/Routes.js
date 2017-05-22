 import React from 'react';
 import { Route } from 'react-router-dom';

 import SignInContainer from '../components/container/SignInContainer';
 import SignUpContainer from '../components/container/SignUpContainer';
 import PasswordRestorePageContainer from '../components/container/PasswordRestorePageContainer';
 import TopBarContainer from '../components/container/TopBarContainer';
 import SideMenuContainer from '../components/container/SideMenuContainer';
 import SearchOperationsContainer from '../components/container/SearchOperationsContainer';
 import MerchantsNewContainer from '../components/container/MerchantsNewContainer';
 import MerchantsModerationContainer from '../components/container/MerchantsModerationContainer';

 export default class extends React.Component {
     render (){
         return (
             <div style={{height: '100%'}}>
                 <Route path={/\/(index|merchant-new|merchant-moderation)/} component={TopBarContainer} />
                 <Route path={/\/(index|merchant-new|merchant-moderation)/} component={SideMenuContainer} />
                 <Route path="/signin"  component={SignInContainer} />
                 <Route path="/signup"  component={SignUpContainer} />
                 <Route path="/restore"  component={PasswordRestorePageContainer} />
                 <Route path="/index"  component={SearchOperationsContainer} />
                 <Route path="/merchant-new"  component={MerchantsNewContainer} />
                 <Route path="/merchant-moderation"  component={MerchantsModerationContainer} />
             </div>
         )
     }
 }