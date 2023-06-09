import {
  call,
  put,
  takeLeading,
  delay,
  select
} from "@redux-saga/core/effects";
import { delayForDataFetching } from "../../assets/constants";
import { getPostsPageFromApi } from "../api";

function* fetchPostPage({payload: pageId}) {
  yield delay(delayForDataFetching);
  const isSorted = yield select(state => state.posts.isSorted)
  const posts = yield call(() => getPostsPageFromApi(pageId));
  yield put({ type: "GET_POST_PAGE", posts });
  if(isSorted) {
    yield put({ type: "SORT_POSTS_BY_TITLE", posts });
  }
}

function* postsSaga() {
  yield takeLeading("GET_POST_PAGE", fetchPostPage);
}

export default postsSaga;
