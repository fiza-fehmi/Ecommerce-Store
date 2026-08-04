import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Cartpage from "./components/Cartpage";
import { useState } from "react";
import Checkout from "./components/Checkout";
const App = () => {
   const [menuToggle, setMenuToggle] = useState(false);
   const [cartItems, setCartItems] = useState([])
   const [category, setCategory] = useState("all");
  const total = cartItems.reduce((total ,item)=>{
  const price =parseInt(item.price.replace("PKR ", "").replace(",",""));
  return total + price * item.quantity
} ,0)
  return (
    <div className="overflow-x-hidden">
      <Navbar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        cartItems={cartItems} 
        setCartItems={setCartItems}/>
      <Routes> 
             <Route path="/" element={ <HomePage category={category} setCategory={setCategory} />} />
        <Route path="/products/:productId" element={<ProductDetail  cartItems={cartItems} setCartItems={setCartItems}
         />} />
        <Route path="/Cartpage" element={<Cartpage cartItems={cartItems} setCartItems={setCartItems} total={total}
         />} />
        <Route path="/Checkout" element={<Checkout total={total} cartItems={cartItems} />} />
      </Routes>
    </div>
  );
};

export default App;
