import { all } from "redux-saga/effects";
import posts from "./posts";
import comments from "./comments";
import profile from "./profile";

export default function* rootSaga() {
  yield all([
    posts(),
    comments(),
    profile(),
  ]);
}
