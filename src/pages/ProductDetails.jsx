import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);

  const totalPrice = (itemQuantity * product.price).toFixed(2);
  function handleSubmit() {
    // add item to cart
  }

  function handleDecrease() {
    if (itemQuantity != 1) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  function handleIncrease() {
    if (itemQuantity != 9) {
      setItemQuantity(itemQuantity + 1);
    }
  }

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
      <hr />
      <div className="productForm">
        <div className="quantButtonContainer">
          <button className="quantityButtons" onClick={handleIncrease}>
            +
          </button>
          <p className="quantInput">{itemQuantity}</p>
          <button className="quantityButtons" onClick={handleDecrease}>
            -
          </button>
        </div>
        <p className="totalPriceDetails">{totalPrice} €</p>
        <form onSubmit={handleSubmit} className="quantForm">
          <button className="menuButtons formButton">Add to Cart</button>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ProductDetails;
