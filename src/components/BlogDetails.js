import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  //click function

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };

  return (
    <div>
      {isLoading && <div> Loading Blog Database... </div>}

      {error && <div>{error} </div>}

      {blog && (
        <article className="container">
          <div className="center-align">
            <h5 className="cyan-text">{blog.title}</h5>
            <hr></hr>
            <p className="brown-text">Written by {blog.author}</p>
            <div>{blog.about}</div>
            <button onClick={handleClick}>Delete blog</button>
          </div>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
