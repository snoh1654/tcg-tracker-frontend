import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="text home-text">
        <h2>Welcome to TCG Tracker</h2>
        <p>Start exploring price history of TCG cards!</p>
        <p>
          The TCG Tracker web app visualizes the price history for daily-updated
          trading card prices from multiple TCGs.
        </p>
        <p>
          Data is retrieved from a custom AWS-powered backend that performs
          periodic scrapes and stores card pricing information and metadata.
        </p>
      </div>
      <Link to="cards" className="button">
        View Price History!
      </Link>

      <div className="links-container">
        <div className="github-container">
          Web App Repo
          <a
            href="https://github.com/snoh1654/tcg-tracker-frontend"
            className="github-link"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="github-icon"
              target="_blank"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="github-container">
          AWS Backend Repo
          <a
            href="https://github.com/snoh1654/tcg-tracker-aws"
            className="github-link"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="github-icon"
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
