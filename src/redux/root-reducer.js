import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cmsReducer from './cms/cms.reducer';
import postReducer from "./post/post.reducer";
import categoryReducer from "./category/category.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cms']
}

const rootReducer = combineReducers({
    cms: cmsReducer,
    post: postReducer,
    category: categoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
