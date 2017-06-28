import {combineReducers} from 'redux';
import sidebar from '../reducers/sidebar';
import siteOverlay from '../reducers/sidebarOverlay';
import auth from '../reducers/auth';

const indexReducer = combineReducers({
    breakPoint: ()=> 1450,
    topBar: ()=> {
        return {isSticky: false}
    },
    sidebar,
    siteOverlay,
    auth
});

export default indexReducer;