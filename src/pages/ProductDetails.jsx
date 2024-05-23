import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/menu/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  });
  return (
    <>
      <Header></Header>
      <div className="menuTop">
        <h1>{product.name}</h1>
        <img src={"." + product.image} className="productDetailsImage" />
        <h3>{product.description}</h3>
        <h3>{product.price} €</h3>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ProductDetails;
