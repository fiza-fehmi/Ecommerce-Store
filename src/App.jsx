import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Cartpage from "./components/Cartpage";
import { useState } from "react";
const App = () => {
   const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <Navbar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle} />
      <Routes> 
        <Route path="/" element={ <HomePage
              menuToggle={menuToggle}
              setMenuToggle={setMenuToggle}
            />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/Cartpage" element={<Cartpage />} />
      </Routes>
    </div>
  );
};

export default App;
