import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createContext, useState } from "react";

export const shopCartContext = createContext();
function App() {
  const [shopCart, setShopCart] = useState([]);
  return (
    <shopCartContext.Provider value={{ shopCart, setShopCart }}>
      <Router>
        <></>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourmenu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </shopCartContext.Provider>
  );
}

export default App;
