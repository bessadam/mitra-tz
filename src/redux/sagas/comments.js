import {
  call,
  put,
  takeLeading,
  delay,
} from "@redux-saga/core/effects";
import { delayForDataFetching } from "../../assets/constants";
import { getPostCommentsFromApi } from "../api";

function* fetchPostComments() {
  yield delay(delayForDataFetching);
  const comments = yield call(() => getPostCommentsFromApi());
  yield put({ type: "GET_POST_COMMENTS", comments });
}

function* commentsSaga() {
  yield takeLeading("GET_POST_COMMENTS", fetchPostComments);
}

export default commentsSaga;
