import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";

function Menu() {
  const [menu, setMenuItems] = useState([]);
  let [filteredMenu, setFilteredMenu] = useState(null);
  let [currentFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((menuData) => {
        setMenuItems(menuData);
      });
  }, []);

  function setFilters(item) {
    let filter = menu.filter((product) => product.category.includes(item));
    setFilteredMenu(filter);
    setCurrentFilter(item);

    if (filteredMenu != null) {
      setFilteredMenu(null);
      setCurrentFilter(item);
    }
  }

  function filterBurgers() {
    if (currentFilter === "burgers") {
      setFilteredMenu(null);
      setCurrentFilter("");
    } else {
      setFilters("burgers");
    }
  }
  function filterDrinks() {
    if (currentFilter === "drinks") {
      setFilteredMenu(null);
      setCurrentFilter("");
    } else {
      setFilters("drinks");
    }
  }

  function filterSides() {
    if (currentFilter === "sides") {
      setFilteredMenu(null);
      setCurrentFilter("");
    } else {
      setFilters("sides");
    }
  }
  return (
    <>
      <Header></Header>
      <div className="menuTop">
        <h1>Our Menu</h1>
        <div className="menuButtonContainer">
          <button
            className={`menuButtons ${
              currentFilter === "burgers" ? "filtering" : ""
            }`}
            onClick={filterBurgers}
          >
            Burgers
          </button>
          <button
            className={`menuButtons ${
              currentFilter === "sides" ? "filtering" : ""
            }`}
            onClick={filterSides}
          >
            Sides
          </button>
          <button
            className={`menuButtons ${
              currentFilter === "drinks" ? "filtering" : ""
            }`}
            onClick={filterDrinks}
          >
            Drinks
          </button>
        </div>
      </div>
      <div className="menuContainer">
        {(filteredMenu || menu).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Menu;
