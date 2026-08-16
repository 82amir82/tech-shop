import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./pages/Loginpage";
import Mainpage from "./pages/mainpage";
import Mainlayout from "./Layout/Mainlayout";
import Product from "./pages/Product";
import Detailproduct from "./pages/Detailproduct";
import Basketcondex from "./condex/Basketcondex";
import Likecondex from "./condex/Likecondex";
import Likeproduct from "./component/Likeproduct";
import Productcondex from "./condex/Productcondex";

function App() {
  const a = false;
  return (
    <Productcondex>
      <Likecondex>
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
      </Likecondex>
    </Productcondex>
  );
}

export default App;
