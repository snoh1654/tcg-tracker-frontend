import "./CardHistPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardHistComponent from "../../Components/CardHistComponent/CardHistComponent.jsx";

function CardHistPage() {
  const [cardHist, setCardHist] = useState([]);
  const { tcg_name, set_name, card_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setCardHist(json);
    };

    const url =
      import.meta.env.VITE_API_URL + "card/" + set_name + "/" + card_id;
    fetchData();
  }, []);

  const imageSrc =
    import.meta.env.VITE_CLOUDFRONT_URL +
    tcg_name +
    "/" +
    set_name +
    "/" +
    card_id +
    ".jpg";

  return (
    <>
      <BackButton></BackButton>

      <div className="card-hist-container">
        <CardHistComponent cardHist={cardHist} />

        <div className="card-info">
          <p className="card-name">{card_id}</p>
          <img src={imageSrc} alt={card_id} className="side-card-img" />
        </div>
      </div>
    </>
  );
}

export default CardHistPage;
