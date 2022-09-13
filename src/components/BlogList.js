import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  //const blogs = props.blogs;
  return (
    <div className="container">
      <div className="card-content violet ">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <div className="collection">
                <h6 className="mediumaquamarine-text">{blog.title}</h6>
                <p className="teal-text">written by {blog.author}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogList;
