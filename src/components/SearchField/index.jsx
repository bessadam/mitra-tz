import React from "react";
// bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// debounce
import debounce from "lodash/debounce";

const SearchField = () => {
  return (
    <div>
      <>
        <Container className="mt-5">
          <Row>
            <Col sm={8}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  w="Search"
                  placeholder="Search..."
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col>
              <Form.Select size="md">
                <option>Sort by...</option>
                <option value="title">Title</option>
                <option value="id">Id</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default SearchField;
