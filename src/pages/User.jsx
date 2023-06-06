import React from "react";
import "../assets/styles/User.scss";
// components
import Posts from "../components/Posts";
import Profile from "../components/Profile";
// router
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div className="user">
      <Profile id={id} />
      <Posts id={id} />
    </div>
  );
};

export default User;
