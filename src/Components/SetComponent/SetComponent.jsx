import "./SetComponent.css";
import { Link } from "react-router";

function SetsComponent({ name }) {
  return (
    <>
      <div className="card set-card">
        <Link to={encodeURIComponent(name)} className="card-link">
          <p className="set-name">{name}</p>
        </Link>
      </div>
    </>
  );
}

export default SetsComponent;
