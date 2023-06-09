import {
  call,
  put,
  takeLeading,
  delay,
} from "@redux-saga/core/effects";
import { delayForDataFetching } from "../../assets/constants";
import { getUserProfileFromApi, getUserPostsFromApi } from "../api";

function* fetchUserProfile({ payload: id }) {
  yield delay(delayForDataFetching);
  const userProfile = yield call(() => getUserProfileFromApi(id));
  yield put({ type: "GET_USER_PROFILE", user: userProfile[0] });
}

function* fetchUserPosts({payload: id}) {
  yield delay(delayForDataFetching);
  const userPosts = yield call(() => getUserPostsFromApi(id));
  yield put({ type: "GET_USER_POSTS", posts: userPosts });
}

function* profileSaga() {
  yield takeLeading("GET_USER_PROFILE", fetchUserProfile);
  yield takeLeading("GET_USER_POSTS", fetchUserPosts);
}

export default profileSaga;
