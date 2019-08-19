import { takeLatest, call, put, all } from 'redux-saga/effects';
import PostActionTypes from './post.types';
import { fetchPostsSuccess, fetchPostsFailure } from "./post.actions";

export function* fetchPostsAsync() {
    try {
        const response = yield fetch('http://127.0.0.1:8004/api/posts');
        const responseBody = yield response.json();
        yield put(fetchPostsSuccess(responseBody));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export function* fetchPostsStart() {
    yield takeLatest(
        PostActionTypes.FETCH_POSTS_START,
        fetchPostsAsync
    );
}

export function* postSagas() {
    yield all([
        call(fetchPostsStart)
    ]);
}
