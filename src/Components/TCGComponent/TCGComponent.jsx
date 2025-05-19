import { Link } from "react-router";
import "./TCGComponent.css";

function TCGComponent({ name, img }) {
  return (
    <div className="card tcg-card">
      <Link to={encodeURIComponent(name)} className="tcg-img-container">
        <img src={img} alt={name} className="tcg-img" />
      </Link>
    </div>
  );
}

export default TCGComponent;
