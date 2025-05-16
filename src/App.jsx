import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import TCGPage from "./Pages/TCGPage/TCGPage";
import SetsPage from "./Pages/SetsPage/SetsPage";
import CardsPage from "./Pages/CardsPage/CardsPage";
import CardHistPage from "./Pages/CardHistPage/CardHistPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<TCGPage />} />
          <Route path="cards/:tcg_name" element={<SetsPage />} />
          <Route path="cards/:tcg_name/:set_name" element={<CardsPage />} />
          <Route
            path="cards/:tcg_name/:set_name/:card_id"
            element={<CardHistPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
