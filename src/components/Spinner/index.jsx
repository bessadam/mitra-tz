import React from "react";
// bootstrap
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;
