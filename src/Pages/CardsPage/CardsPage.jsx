import "./CardsPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../../Components/CardComponent/CardComponent.jsx";

function CardsPage() {
  const [cards, setCards] = useState([]);
  const { tcg_name, set_name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setCards(json);
    };

    const url = import.meta.env.VITE_API_URL + "cards/" + set_name;
    fetchData();
  }, []);

  return (
    <>
      <BackButton></BackButton>

      <div className="cards-container">
        {cards.map((item) => (
          <CardComponent
            key={item.card_id}
            name={item.name}
            imageSrc={
              import.meta.env.VITE_CLOUDFRONT_URL +
              tcg_name +
              "/" +
              set_name +
              "/" +
              item.card_id +
              ".jpg"
            }
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default CardsPage;
