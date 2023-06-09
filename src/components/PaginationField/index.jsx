import React from "react";
// bootstrap
import { Pagination } from "react-bootstrap";
// redux
import { useDispatch } from "react-redux";
import { getPostPage } from "../../redux/actions/posts";

const PaginationField = ({ length }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const dispatch = useDispatch();
  const mockArray = [];
  for (let i = 1; i <= length; i++) {
    mockArray.push(i);
  }

  const fetchPosts = (pageId) => {
    if(pageId !== currentPage) {
      dispatch(getPostPage(pageId));
      setCurrentPage(pageId)
      window.scrollTo(0, 0);
    }
  };

  return (
    <Pagination size="md">
      {mockArray.map((pageNum) => {
        return (
          <Pagination.Item
            active={pageNum === currentPage}
            key={pageNum}
            onClick={() => fetchPosts(pageNum)}
          >
            {pageNum}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default PaginationField;
