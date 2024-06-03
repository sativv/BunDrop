import Footer from "../components/Footer";
import Header from "../components/Header";
import { shopCartContext, orderContext } from "../App";
import { useContext, useEffect } from "react";
import { calculateTotalPrice } from "../Funcs/Funcs";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { shopCart } = useContext(shopCartContext);
  const { curOrder } = useContext(orderContext);
  const nav = useNavigate();

  function handleNav() {
    console.log(shopCart.length);
    if (shopCart.length > 0) {
      nav("/checkout");
    } else {
      nav("/ourmenu");
    }
  }

  useEffect(() => {
    if (curOrder !== null) {
      nav("/orderstatus");
    }
  }, [curOrder, nav]);

  let totalPriceValue = 0;

  if (shopCart.length > 0) {
    totalPriceValue = calculateTotalPrice(shopCart).toFixed(2);
  }

  if (shopCart.length > 0 && shopCart) {
    return (
      <>
        <Header></Header>

        <div className="cartContainer">
          <div className="cartItems">
            {shopCart.map((product) => (
              <CartItem key={product.id} product={product}></CartItem>
            ))}
          </div>
          <hr className="cartHr" />

          <div className="totalPrice">
            <h3>total price</h3>
            <p>{totalPriceValue} €</p>
          </div>
          <div className="checkoutButton">
            <button className="menuButtons cbButton" onClick={handleNav}>
              Go to checkout
            </button>
          </div>
        </div>

        <Footer></Footer>
      </>
    );
  } else
    return (
      <>
        <Header></Header>
        <div className="cartContainer">
          <div className="cartItems">
            <h1 className="emptyText">Your cart is empty...</h1>
          </div>
          <hr className="cartHr" />

          <div className="totalPrice">
            <h3> </h3>
            <p> </p>
          </div>
          <div className="checkoutButton">
            <button className="menuButtons cbButton" onClick={handleNav}>
              Go to Menu
            </button>
          </div>
        </div>

        <Footer></Footer>
      </>
    );
}

export default Cart;
