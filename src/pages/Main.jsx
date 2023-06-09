import React from "react";
import "../assets/styles/Main.scss";
//bootstrap
import { Container, Row } from "react-bootstrap";
// components
import Posts from "../components/Posts";
import SearchField from "../components/SearchField";
import PaginationField from "../components/PaginationField";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getPostPage } from "../redux/actions/posts";
// others
import { postsInPageLimit } from "../assets/constants";

const Main = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostPage(1));
  }, []);

  return (
    <Container className="main">
      <h1>Posts</h1>
      <SearchField />
      <Row>
        <Posts posts={posts} />
      </Row>
      <PaginationField length={postsInPageLimit} />
    </Container>
  );
};

export default Main;
