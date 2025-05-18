import "./CardComponent.css";
import { Link } from "react-router";

function CardComponent({ name, imageSrc, price, card }) {
  return (
    <>
      <div className="card card-card">
        <Link to={name} state={card} className="card-link">
          <img src={imageSrc} alt={name} loading="lazy" className="card-img" />
          <p className="card-name">{name}</p>
          <p className="card-price">
            {price == "Not Available" ? price : "$" + price}
          </p>
        </Link>
      </div>
    </>
  );
}

export default CardComponent;
