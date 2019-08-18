import { combineReducers } from 'redux';

import cmsReducer from './cms/cms.reducer';

const rootReducer = combineReducers({
    cms: cmsReducer,
});

export default rootReducer;
