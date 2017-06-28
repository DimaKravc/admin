import {CHANGE_OVERLAY} from '../actions/types.js';

let initialState = {
    isShow: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_OVERLAY:
            return {
                isShow: action.overlay === 'show'
            };
        default:
            return state
    }
}