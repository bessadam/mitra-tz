import React from "react";
// bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";
// debounce
import debounce from "lodash/debounce";
// redux
import {
  searchPostByTitle,
  sortPostsByDefault,
  sortPostsByTitle,
} from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

const SearchField = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  const debouncedSearch = React.useCallback(
    debounce((val) => {
      dispatch(searchPostByTitle(val.toLowerCase()));
    }, 300),
    [searchValue]
  );

  const onSearchValueChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  const sortByTitle = (e) => {
    if (e.target.value === "title") {
      dispatch(sortPostsByTitle());
    } else {
      dispatch(sortPostsByDefault());
    }
  };

  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={8}>
          <Form className="d-flex">
            <Form.Control
              value={searchValue}
              onChange={(e) => onSearchValueChange(e)}
              type="search"
              w="Search"
              placeholder="Search..."
              className="me-2 rounded-pill"
              aria-label="Search"
            />
          </Form>
        </Col>
        <Col>
          <Form.Select size="md" onChange={(e) => sortByTitle(e)}>
            <option>Sort by...</option>
            <option value="title">Title</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchField;
