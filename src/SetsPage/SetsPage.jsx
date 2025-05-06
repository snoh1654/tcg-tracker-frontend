import "./SetsPage.css";
import BackButton from "../BackButton/BackButton.jsx";
import SetsComponent from "../SetsComponent/SetsComponent.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SetsPage() {
  const [sets, setSets] = useState([]);
  const { tcg_name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://phedr164bh.execute-api.us-west-2.amazonaws.com/sets/" +
          tcg_name
      );
      const json = await res.json();
      console.log(json);
      setSets(json);
    };

    fetchData();
  }, []);

  // useEffect();
  // makes API call to DB, use react query to check if its already there. If not, store it after call
  // card component for each set, takes all info retrived from set

  // configure tcg component design
  return (
    <>
      <BackButton></BackButton>

      <div className="sets-container">
        {sets.map((item, i) => (
          <SetsComponent key={i} name={item.set_name} />
        ))}
      </div>
    </>
  );
}

export default SetsPage;
