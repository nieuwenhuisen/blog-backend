import CmsActionTypes from './cms.types';

const INITIAL_STATE = {
    sidebarOpen: true,
};

const cmsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CmsActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            };
        default:
            return state;
    }
};

export default cmsReducer;
