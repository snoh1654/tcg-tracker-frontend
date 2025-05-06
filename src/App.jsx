import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import TCGPage from "./Pages/TCGPage/TCGPage";
import SetsPage from "./Pages/SetsPage/SetsPage";

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
