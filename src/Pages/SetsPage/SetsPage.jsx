import "./SetsPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import SetsComponent from "../../Components/SetComponent/SetComponent.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SetsPage() {
  const [sets, setSets] = useState([]);
  const { tcg_name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setSets(json);
    };

    const url = import.meta.env.VITE_API_URL + "sets/" + tcg_name;
    fetchData();
  }, []);

  return (
    <>
      <BackButton></BackButton>

      <div className="sets-container">
        {sets.map((item) => (
          <SetsComponent key={item.set_name} name={item.set_name} />
        ))}
      </div>
    </>
  );
}

export default SetsPage;
