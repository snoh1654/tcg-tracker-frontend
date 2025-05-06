import "./SetsComponent.css";
import { Link } from "react-router";

function SetsComponent({ name }) {
  const url_name = name.replaceAll(" ", "-");

  return (
    <>
      <div className="card set-card">
        <Link to={url_name} className="card-img-container">
          <p className="set-name">{name}</p>
        </Link>
      </div>
    </>
  );
}

export default SetsComponent;
