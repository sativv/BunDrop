import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [menu, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((r) => r.json())
      .then((menuData) => {
        setMenuItems(menuData);
      });
  }, []);

  const firstFour = menu.slice(0, 4);
  return (
    <div className="App">
      <Header></Header>

      <div>
        <img src="./images/logo.png" alt="" className="homeLogo" />
      </div>
      <h2>Our Bestsellers</h2>
      <div className="bestSellers">
        {firstFour.map((product, index) => (
          <Product key={{ index }} product={product}></Product>
        ))}
        ;
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
