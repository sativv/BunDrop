import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import { createContext, useState } from "react";
import Swish from "./pages/Swish";
import CreditCard from "./pages/CreditCard";
import OrderStatus from "./pages/Orderstatus";
import AdressOrder from "./pages/AdressOrder";

export const shopCartContext = createContext();
export const userContext = createContext();
export const orderContext = createContext();

function App() {
  const [shopCart, setShopCart] = useState([]);
  const [curUser, setCurUser] = useState(null);
  const [curOrder, setCurOrder] = useState(null);
  return (
    <shopCartContext.Provider value={{ shopCart, setShopCart }}>
      <userContext.Provider value={{ curUser, setCurUser }}>
        <orderContext.Provider value={{ curOrder, setCurOrder }}>
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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/swish" element={<Swish />} />
              <Route path="/credit" element={<CreditCard />} />
              <Route path="/orderstatus" element={<OrderStatus />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/address" element={<AdressOrder />} />
            </Routes>
          </Router>{" "}
        </orderContext.Provider>
      </userContext.Provider>
    </shopCartContext.Provider>
  );
}

export default App;
