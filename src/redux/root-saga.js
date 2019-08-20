import { all, call } from "redux-saga/effects";

import { postSagas } from "./post/post.sages";
import { categorySagas } from "./category/category.sages";

export default function* rootSage () {
    yield all([
        call(postSagas),
        call(categorySagas),
    ]);
}
