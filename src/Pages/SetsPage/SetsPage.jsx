import "./SetsPage.css";
import BackButton from "../../Components/BackButton/BackButton.jsx";
import SetsComponent from "../../Components/SetComponent/SetComponent.jsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function SetsPage() {
  const { tcg_name } = useParams();
  const url =
    import.meta.env.VITE_API_URL + "sets/" + encodeURIComponent(tcg_name);

  const { data: sets = [] } = useQuery({
    queryKey: ["sets", tcg_name],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

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
