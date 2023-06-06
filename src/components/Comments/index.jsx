import React from "react";
// bootstrap
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Comments = ({ id }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((json) => setComments(json));
    }, 500);
  }, [id]);

  return (
    <div>
      {comments.map((comment) => (
        <Accordion.Body key={comment.id}>
          <span style={{ fontWeight: "bold" }}>{comment.email}: </span>
          <span>{comment.body}</span>
        </Accordion.Body>
      ))}
    </div>
  );
};

export default Comments;
