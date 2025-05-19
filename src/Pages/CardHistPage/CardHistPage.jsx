import "./CardHistPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CardHistComponent from "../../Components/CardHistComponent/CardHistComponent.jsx";
import { useLocation } from "react-router-dom";

const activeButtonType = {
  "2W": 14,
  "3M": 90,
  "1Y": 365,
};

function CardHistPage() {
  const [cardHist, setCardHist] = useState([]);
  let { tcg_name, set_name, card_id } = useParams();

  const url =
    import.meta.env.VITE_API_URL +
    "card/" +
    encodeURIComponent(set_name) +
    "?card-id=" +
    encodeURIComponent(card_id);

  const imageSrc =
    import.meta.env.VITE_CLOUDFRONT_URL +
    encodeURIComponent(tcg_name) +
    "/" +
    encodeURIComponent(set_name) +
    "/" +
    encodeURIComponent(card_id) +
    ".jpg";
  const activeButton = useRef("2W");

  const location = useLocation();
  const initialRecordDate = location.state.initial_record_date;

  if (initialRecordDate) {
    activeButtonType["ALL"] = Math.floor(
      (Date.now() - new Date(initialRecordDate.replace(/\.\d+/, ""))) /
        (1000 * 60 * 60 * 24)
    );
  }

  useEffect(() => {
    fetchCardHist(url);
  }, []);

  async function updatePriceHistory(buttonType) {
    let days_since_present = activeButtonType[buttonType];
    let fetchURL = url + `&start_date=${days_since_present}`;
    activeButton.current = buttonType;
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
              onClick={() => updatePriceHistory("2W")}
              className={`hist-button two-weeks ${
                activeButton.current === "2W" ? "active" : ""
              }`}
            >
              Two Weeks
            </button>
            <button
              onClick={() => updatePriceHistory("3M")}
              className={`hist-button three-months ${
                activeButton.current === "3M" ? "active" : ""
              }`}
            >
              Three Months
            </button>
            <button
              onClick={() => updatePriceHistory("1Y")}
              className={`hist-button one-year ${
                activeButton.current === "1Y" ? "active" : ""
              }`}
            >
              One Year
            </button>
            <button
              onClick={() => updatePriceHistory("ALL")}
              className={`hist-button all-time ${
                activeButton.current === "ALL" ? "active" : ""
              }`}
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
