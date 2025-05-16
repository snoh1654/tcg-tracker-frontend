import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="text home-text">
        <h2>Welcome to TCG Tracker</h2>
        <p>Start exploring price history of TCG cards!</p>
        <p>
          There are updates twice per day to ensure that you are seeing the
          latest information!
        </p>
      </div>
      <Link to="cards" className="button">
        View Price History!
      </Link>
    </div>
  );
}

export default Home;
