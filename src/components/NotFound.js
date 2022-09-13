import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="center-align">
      <h6>Sorry</h6>
      <p>page not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
};
export default NotFound;
