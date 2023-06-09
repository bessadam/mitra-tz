import React from "react";
import "../assets/styles/User.scss";
// components
import Posts from "../components/Posts";
import Profile from "../components/Profile";
// router
import { useParams } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "../redux/actions/userProfile";

const User = () => {
  const { id } = useParams();
  const userPosts = useSelector(state => state.profile.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserPosts(id));
  }, [id]);

  return (
    <div className="user">
      <Profile id={id} />
      <Posts posts={userPosts} />
    </div>
  );
};

export default User;
