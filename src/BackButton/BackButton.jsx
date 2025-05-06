import "./BackButton.css";
import { useNavigate, Link } from "react-router";

function SetsPage() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      ←
    </button>
  );
}

export default SetsPage;
