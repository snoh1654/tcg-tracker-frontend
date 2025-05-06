import { Link } from "react-router";
import "./TCGComponent.css";

function TCGComponent({ name, img }) {
  const url_name = name.replaceAll(" ", "-");

  return (
    <div className="card tcg-card">
      <Link to={url_name} className="card-img-container">
        <img src={img} alt={name} className="card-img" />
      </Link>
    </div>
  );
}

export default TCGComponent;
