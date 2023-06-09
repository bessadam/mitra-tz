import { GET_POST_COMMENTS } from "../actionTypes/commentsActions";

export const comments = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};
