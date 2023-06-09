import React from "react";
// bootstrap
import { Accordion } from "react-bootstrap";

const Comments = ({postComments}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Comments</Accordion.Header>
        {postComments?.map((comment) => (
          <Accordion.Body key={comment.id}>
            <span><b>{comment.email}:</b></span>
            <span>{comment.body}</span>
          </Accordion.Body>
        ))}
      </Accordion.Item>
    </Accordion>
  );
};

export default Comments;
