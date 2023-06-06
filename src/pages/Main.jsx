import React from "react";
import "../assets/styles/Main.scss";
// components
import Posts from "../components/Posts";

const Main = () => {
  return (
    <div className="main">
      <h1>Posts</h1>
      <Posts />
    </div>
  );
};

export default Main;
