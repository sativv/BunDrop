import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function Menu() {
  const [menu, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((menuData) => {
        setMenuItems(menuData);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="menuTop">
        <h1>Our Menu</h1>
        <div className="menuButtonContainer">
          <button className="menuButtons">Burgers</button>
          <button className="menuButtons">Sides</button>
          <button className="menuButtons">Drinks</button>
        </div>
      </div>
      <div className="menuContainer">
        {menu.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Menu;
