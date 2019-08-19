import { all, call } from 'redux-saga/effects';

import { postSagas } from './post/post.sages';

export default function* rootSage () {
    yield all([
        call(postSagas),
    ]);
}
