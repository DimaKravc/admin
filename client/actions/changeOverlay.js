import {CHANGE_OVERLAY} from './types';

export let changeOverlay = (overlay) => {
    return {
        type: CHANGE_OVERLAY,
        overlay
    }
};