import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { shopCartContext } from "../App";
import { HandleCart } from "../Funcs/Funcs";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { shopCart, setShopCart } = useContext(shopCartContext);
  const [itemQuantity, setItemQuantity] = useState(1);
  const nav = useNavigate();

  const totalPrice = (itemQuantity * product.price).toFixed(2);

  function handleSubmit(e) {
    setShopCart(HandleCart(shopCart, product, itemQuantity));

    // console.log(addItemToCart(shopCart, product, itemQuantity)[0]);
    nav("/ourmenu");
  }

  function handleDecrease() {
    if (itemQuantity < 1) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  function handleIncrease() {
    if (itemQuantity < 9) {
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
        <div className="backButtonContainer">
          <Link to={"/ourmenu"}>
            <FontAwesomeIcon icon={faArrowLeftLong} className="backButton" />
          </Link>
        </div>
        <h1>{product.name}</h1>
        <img src={"." + product.image} className="productDetailsImage" />
        <h3 className="prodDescription">{product.description}</h3>
        <h3>{product.price} €</h3>
      </div>
      <hr />
      <div className="productForm">
        <div className="quantButtonContainer">
          <button className="quantityButtons" onClick={handleDecrease}>
            -
          </button>

          <p className="quantInput">{itemQuantity}</p>
          <button className="quantityButtons" onClick={handleIncrease}>
            +
          </button>
        </div>
        <p className="totalPriceDetails">{totalPrice} €</p>

        <button className="menuButtons formButton" onClick={handleSubmit}>
          Add to Cart
        </button>
      </div>

      <Footer></Footer>
    </>
  );
}

export default ProductDetails;
