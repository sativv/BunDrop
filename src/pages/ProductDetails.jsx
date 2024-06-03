import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { shopCartContext, userContext } from "../App";
import { HandleCart } from "../Funcs/Funcs";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { shopCart, setShopCart } = useContext(shopCartContext);
  const [itemQuantity, setItemQuantity] = useState(1);
  const { curUser, setCurUser } = useContext(userContext);
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
  function handleFavorites() {
    const updatedUser = { ...curUser };

    if (!updatedUser.favorites) {
      updatedUser.favorites = [];
    }

    const productIndex = updatedUser.favorites.indexOf(product.id);

    // check if the product is already in favorites
    if (!updatedUser.favorites.includes(product.id)) {
      // If not, add it to favorites
      updatedUser.favorites.push(product.id);
      setCurUser(updatedUser);
    } else {
      // remove from favorites
      updatedUser.favorites.splice(productIndex, 1);
    }

    console.log(updatedUser.favorites);
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
          <FontAwesomeIcon
            icon={faStar}
            className={
              curUser &&
              curUser.favorites &&
              curUser.favorites.includes(product.id)
                ? "favIcon favActive"
                : "favIcon"
            }
            onClick={handleFavorites}
          />
        </div>
        <h1>{product.name}</h1>
        <img src={"." + product.image} className="productDetailsImage" />
        <h3 className="prodDescription">{product.description}</h3>
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
