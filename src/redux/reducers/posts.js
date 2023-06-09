import {
  GET_POST_PAGE,
  SEARCH_POST_BY_TITLE,
  SORT_POSTS_BY_TITLE,
  SORT_BY_DEFAULT,
} from "../actionTypes/postsActions";

export const posts = (
  state = { posts: [], copyOfPost: [], isSorted: false },
  action
) => {
  switch (action.type) {
    case GET_POST_PAGE:
      return { ...state, posts: action.posts, copyOfPost: action.posts };
    case SEARCH_POST_BY_TITLE: {
      return {
        ...state,
        posts: [...state.copyOfPost]?.filter((post) =>
          post.title.includes(action.payload)
        ),
      };
    }
    case SORT_POSTS_BY_TITLE:
      return {
        ...state,
        posts: [...state.posts]?.sort((a, b) => (a.title > b.title ? 1 : -1)),
        isSorted: true,
      };
    case SORT_BY_DEFAULT:
      return {
        ...state,
        posts: [...state.posts]?.sort((a, b) => a.id - b.id),
        isSorted: false,
      };
    default:
      return state;
  }
};
