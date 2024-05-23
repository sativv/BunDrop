import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  const product = {
    name: "Cheeseburger",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fcrispy-comte-cheeseburgers&psig=AOvVaw1Fc173pCkPRuSV1bB_lQzh&ust=1716546961034000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj86fDJo4YDFQAAAAAdAAAAABAE",
    ingredients: "bun",
  };
  return (
    <div className="App">
      <Header></Header>

      <div>
        <img src="./images/logo.png" alt="" className="homeLogo" />
      </div>
      <h2>Our Bestsellers</h2>
      <div className="bestSellers">
        <Product product={product}></Product>
        <Product product={product}></Product>
        <Product product={product}></Product>
        <Product product={product}></Product>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
