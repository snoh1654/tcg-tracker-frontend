import TCGComponent from "../../Components/TCGComponent/TCGComponent";
import "./TCGPage.css";

function TCGPage() {
  return (
    <>
      <div className="tcg-container">
        <TCGComponent name="One Piece Card Game" img="optcg_logo.png" />
        <TCGComponent name="Pokemon" img="pokemon_logo.png" />
        <TCGComponent name="Yugioh" img="yugioh_logo.png" />
        <TCGComponent name="Cardfight Vanguard" img="cfv_logo.png" />
        <TCGComponent name="Weiss Schwarz" img="weiss_logo.png" />
      </div>
    </>
  );
}

export default TCGPage;
