import { takeLatest, call, put, all } from 'redux-saga/effects';
import CategoryActionTypes from './category.types';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./category.actions";

export function* fetchCategoriesAsync() {
    try {
        const response = yield fetch('http://127.0.0.1:8004/api/categories');
        const responseBody = yield response.json();
        yield put(fetchCategoriesSuccess(responseBody));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}

export function* fetchCategoriesStart() {
    yield takeLatest(
        CategoryActionTypes.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categorySagas() {
    yield all([
        call(fetchCategoriesStart)
    ]);
}
