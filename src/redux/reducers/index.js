import { combineReducers } from "redux";
import { profile } from "./profile";
import { posts } from "./posts";
import { comments } from "./comments";

const rootReducer = combineReducers({
  profile,
  posts,
  comments
});
export default rootReducer;
