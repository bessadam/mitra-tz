import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// all posts
const getAllPostsFromApi = async () => {
  try {
    const response = await axios.get(`/posts`);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

// posts pagination
const getPostsPageFromApi = async (pageId) => {
  try {
    const response = await axios.get(`/posts?_page=${pageId}&_limit=10`);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

// comments
const getPostCommentsFromApi = async () => {
  try {
    const response = await axios.get(`/comments`);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

// user profile
const getUserProfileFromApi = async (userId) => {
  try {
    const response = await axios.get(`/users?id=${userId}`);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

// current user posts
const getUserPostsFromApi = async (userId) => {
  try {
    const response = await axios.get(`/posts?userId=${userId}`);
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
  }
};

export {
  getAllPostsFromApi,
  getPostsPageFromApi,
  getPostCommentsFromApi,
  getUserProfileFromApi,
  getUserPostsFromApi,
};
