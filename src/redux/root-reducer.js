import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cmsReducer from './cms/cms.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cms']
}

const rootReducer = combineReducers({
    cms: cmsReducer,
});

export default persistReducer(persistConfig, rootReducer);
