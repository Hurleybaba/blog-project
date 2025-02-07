import React, { useState } from "react";
import "../Styles/blogs.css";
import "../Styles/media.css";
import blogs from "../Utilities/blogs.js";

const Blogs = () => {
  const buttons = ["All", "Tech", "Food", "News"];

  const [isActive, setIsActive] = useState(0);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const handleFilter = (index) => {
    setIsActive(index);

    const filtered = blogs.filter((blog) => blog.category === buttons[index]);

    index === 0 ? setFilteredBlogs(blogs) : setFilteredBlogs(filtered);
  };

  return (
    <>
      <div className="post-filter container">
        {buttons.map((button, index) => (
          <span
            className={
              isActive === index ? "filter-item active-filter" : "filter-item"
            }
            onClick={() => handleFilter(index)}
          >
            {button}
          </span>
        ))}
      </div>

      <div className="post container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="post-box tech">
              <img src={blog.img} alt="" className="post-img" />
              <h2 className="category">{blog.category}</h2>
              <a href="#" className="post-title">
                {blog.title}
              </a>
              <span className="post-date">{blog.date}</span>
              <p className="post-description">{blog.content}</p>
              <div className="profile">
                <img src={blog["profile-img"]} alt="" className="profile-img" />
                <span className="profile-name">{blog.name}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </>
  );
};

export default Blogs;
