import "./CardHistPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardHistComponent from "../../Components/CardHistComponent/CardHistComponent.jsx";
import { useLocation } from "react-router-dom";

function CardHistPage() {
  const [cardHist, setCardHist] = useState([]);
  const { tcg_name, set_name, card_id } = useParams();

  const location = useLocation();
  const initialRecordDate = location.state.initial_record_date;
  if (initialRecordDate) {
    const maxDateDiff = Math.floor(
      (Date.now() - new Date(initialRecordDate.replace(/\.\d+/, ""))) /
        (1000 * 60 * 60 * 24)
    );
  }

  const imageSrc =
    import.meta.env.VITE_CLOUDFRONT_URL +
    tcg_name +
    "/" +
    set_name +
    "/" +
    card_id +
    ".jpg";
  const url = import.meta.env.VITE_API_URL + "card/" + set_name + "/" + card_id;
  useEffect(() => {
    fetchCardHist(url);
  }, []);

  async function updatePriceHistory(days_since_present) {
    console.log(days_since_present);
    let fetchURL = url + `?start_date=${days_since_present}`;
    fetchCardHist(fetchURL);
  }

  async function fetchCardHist(url) {
    const res = await fetch(url);
    const json = await res.json();
    setCardHist(json);
  }

  return (
    <>
      <BackButton></BackButton>

      <div className="card-hist-container">
        <div className="card-data">
          <CardHistComponent cardHist={cardHist} />
          <div className="hist-buttons">
            <button
              onClick={() => updatePriceHistory(14)}
              className="hist-button two-weeks"
            >
              Two Weeks
            </button>
            <button
              onClick={() => updatePriceHistory(90)}
              className="hist-button three-months"
            >
              Three Months
            </button>
            <button
              onClick={() => updatePriceHistory(365)}
              className="hist-button one-year"
            >
              One Year
            </button>
            <button
              onClick={() => updatePriceHistory(maxDateDiff)}
              className="hist-button all-time"
              disabled={initialRecordDate === undefined}
            >
              All Time
            </button>
          </div>
        </div>
        <div className="card-info">
          <p className="card-name">{card_id}</p>
          <img src={imageSrc} alt={card_id} className="side-card-img" />
        </div>
      </div>
    </>
  );
}

export default CardHistPage;
