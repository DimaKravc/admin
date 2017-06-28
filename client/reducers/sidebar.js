import {CHANGE_SIDEBAR} from '../actions/types.js';

let initialState = {
    isShow: window.innerWidth > 1450,
    isSubMenuShow: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SIDEBAR:
            return {
                isShow: action.sidebar === 'show',
                isSubMenuShow: action.submenu === 'show'
            };
        default:
            return state
    }
}