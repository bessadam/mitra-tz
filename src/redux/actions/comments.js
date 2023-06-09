import { GET_POST_COMMENTS } from "../actionTypes/commentsActions";

export const getPostComments = (postId) => {
  return {
    type: GET_POST_COMMENTS,
    payload: postId,
  };
};
