import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import TCGPage from "./TCGPage/TCGPage";
import SetsPage from "./SetsPage/SetsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<TCGPage />} />
          <Route path="cards/:tcg_name" element={<SetsPage />} />
          <Route path=":cards/tcg_name/:set_name" />
          <Route path=":cards/tcg_name/:set_name/:card_id" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
