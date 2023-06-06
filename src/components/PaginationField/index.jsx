import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationField = () => {
  return (
    <Pagination size="sm">
      {[1,2,3,4,5].map((page) => {
        return <Pagination.Item key={page}>{page}</Pagination.Item>;
      })}
    </Pagination>
  );
};

export default PaginationField;
