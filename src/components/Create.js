import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    const blog = { title, author, about };
    setIsLoading(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      history.push("/");
    });
  };
  //input and button state
  return (
    <div className="container">
      <div className="center-align">
        <h3>Add a New Blog</h3>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p>Blog Author:</p>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="in"
          />
          <label>Blog Body:</label>
          <textarea
            required
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          {!isLoading && <button>Add Blog</button>}
          {isLoading && <button disabled>Adding Blog...</button>}
          {/*when loading is false the button displays normally, when its state is now setting loading to true it checks whats beside it ,it sees a disabled button, and goes yeah sure,'lets do a disabled button with that text'*/}
        </form>
      </div>
    </div>
  );
};
export default Create;
