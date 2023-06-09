import {
  GET_USER_PROFILE,
  GET_USER_POSTS,
} from "../actionTypes/userProfileActions";
  
export const profile = (state = { user: null, posts: [] }, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return { ...state, user: action.user };
    case GET_USER_POSTS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};
