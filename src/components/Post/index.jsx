import React from "react";
import styles from "./Post.module.scss";
// bootstrap
import { Col, Card } from "react-bootstrap";
// components
import Comments from "../Comments";
// router
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({ id, userId, body, title }) => {
  const postComments = useSelector(state => state.comments.comments?.filter(el => el.postId === id));
  const navigate = useNavigate();

  return (
    <Col key={id}>
      <Card>
        <Card.Header className={styles.postHeader}>
          <Card.Img
            alt="User_Avatar"
            variant="top"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className={styles.avatar}
            onClick={() => navigate(`/user/${userId}`)}
          />
          <Card.Title className="p-10">{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Comments postComments={postComments} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
