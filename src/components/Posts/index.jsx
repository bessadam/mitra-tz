import React from "react";
import styles from "./Posts.module.scss";
// bootstrap
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// router
import { useNavigate } from "react-router-dom";
// components
import Loader from "../Spinner";
import Comments from "../Comments";
import SearchField from "../SearchField";
import PaginationField from "../PaginationField";

const Posts = ({ id=1 }) => {
  const [posts, setPosts] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      // some delay
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((json) => setPosts(json));
    }, 500);
  }, [id]);

  return (
    <>
      {!!posts.length ? (
        <Container fluid="sm">
          <SearchField />
          <Row xs={1} md={1} className="g-4 p-4">
            {posts?.slice(0, 10).map((post) => (
              <Col key={post.id}>
                <Card>
                  <Card.Header className="d-flex">
                    <Card.Img
                      alt="User_Avatar"
                      variant="top"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="br-100"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "2.5rem",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/user/${post.userId}`)}
                    />
                    <Card.Title className="p-10">{post.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{post.body}</Card.Text>
                    <Accordion>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Comments</Accordion.Header>
                        <Comments id={post.id} />
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <PaginationField />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;
