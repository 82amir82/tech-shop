import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./pages/Loginpage";
import Mainpage from "./pages/mainpage";
import Mainlayout from "./Layout/Mainlayout";
import Product from "./pages/Product";
import Detailproduct from "./pages/Detailproduct";
import Basketcondex from "./condex/Basketcondex";

function App() {
  return (
    <Basketcondex>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route element={<Mainlayout />}>
          <Route path="/home" element={<Mainpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Detailproduct />} />
        </Route>
        <Route />
      </Routes>
    </Basketcondex>
  );
}

export default App;
