import TCGComponent from "../../Components/TCGComponent/TCGComponent";
import "./TCGPage.css";
import { useState } from "react";

function TCGPage() {
  dateRange, (setDateRange = useState([]));

  return (
    <>
      <div className="tcg-container">
        <TCGComponent name="One Piece Card Game" img="public\optcg_logo.png" />
        <TCGComponent name="Weiss Schwarz" img="public\weiss_logo.png" />
      </div>
    </>
  );
}

export default TCGPage;
