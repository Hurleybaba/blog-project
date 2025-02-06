import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="post-filter container">
        <span className="filter-item active-filter" data-filter="all">
          All
        </span>
        <span className="filter-item" data-filter="tech">
          Tech
        </span>
        <span className="filter-item" data-filter="food">
          Food
        </span>
        <span className="filter-item" data-filter="news">
          News
        </span>
      </div>

      <div className="post container"></div>
    </>
  );
};

export default Blogs;
