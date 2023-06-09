import { GET_USER_PROFILE, GET_USER_POSTS} from "../actionTypes/userProfileActions";

export const getUserProfile = (userId) => {
  return {
    type: GET_USER_PROFILE,
    payload: userId,
  };
};

export const getUserPosts = (userId) => {
  return {
    type: GET_USER_POSTS,
    payload: userId,
  };
};

