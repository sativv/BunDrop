import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <></>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmenu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
