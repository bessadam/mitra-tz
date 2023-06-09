import React from "react";
// bootstrap
import { Container, Row } from "react-bootstrap";
// components
import Loader from "../Spinner";
import Post from "../Post";

const Posts = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  posts = filteredPosts.length ? filteredPosts : posts;
  return (
    <>
      <Container fluid="sm">
        {posts ? (
          <Row xs={1} md={1} className="g-4 p-4">
            {posts?.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </>
  );
};

export default Posts;
