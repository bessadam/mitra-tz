import {
  GET_POST_PAGE,
  SEARCH_POST_BY_TITLE,
  SORT_POSTS_BY_TITLE,
  SORT_BY_DEFAULT,
} from "../actionTypes/postsActions";

export const getPostPage = (pageId) => {
  return {
    type: GET_POST_PAGE,
    payload: pageId,
  };
};

export const searchPostByTitle = (title) => {
  return {
    type: SEARCH_POST_BY_TITLE,
    payload: title,
  };
};

export const sortPostsByTitle = () => {
  return {
    type: SORT_POSTS_BY_TITLE,
  };
};

export const sortPostsByDefault = () => {
  return {
    type: SORT_BY_DEFAULT,
  };
};
