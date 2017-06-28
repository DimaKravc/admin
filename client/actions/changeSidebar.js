import {CHANGE_SIDEBAR} from './types';

export let changeSidebar = (sidebar, submenu) => {
    return {
        type: CHANGE_SIDEBAR,
        sidebar,
        submenu
    }
};