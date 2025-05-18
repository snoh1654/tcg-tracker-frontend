import "./CardsPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import { useParams } from "react-router-dom";
import CardComponent from "../../Components/CardComponent/CardComponent.jsx";
import { useQuery } from "@tanstack/react-query";

function CardsPage() {
  const { tcg_name, set_name } = useParams();
  const url = import.meta.env.VITE_API_URL + "cards/" + set_name;

  const { data: cards = [] } = useQuery({
    queryKey: ["cards", tcg_name, set_name],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  cards.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);

    if (isNaN(priceA)) return 1;
    if (isNaN(priceB)) return -1;

    return priceB - priceA;
  });

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
            card={item}
          />
        ))}
      </div>
    </>
  );
}

export default CardsPage;
