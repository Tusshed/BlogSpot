import React from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //we have turned blogs to data => data:blogs

  return (
    <div>
      {error && <div>{error} </div>}
      {isLoading && <div> Loading Blog Database... </div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
