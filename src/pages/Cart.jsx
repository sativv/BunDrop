import Footer from "../components/Footer";
import Header from "../components/Header";
import { shopCartContext } from "../App";
import { useContext } from "react";

function Cart() {
  const { shopCart } = useContext(shopCartContext);

  if (shopCart.length > 0) {
    return (
      <>
        <Header></Header>
        <div className="cartContainer">
          <div className="cartItems"></div>
          <hr className="cartHr" />

          <div className="totalPrice">
            <h3>total price</h3>
            <p>150:-</p>
          </div>
          <div className="checkoutButton">
            <button className="menuButtons cbButton">Go to checkout</button>
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
            <h3>total price</h3>
            <p>000</p>
          </div>
          <div className="checkoutButton">
            <button className="menuButtons cbButton">Go to checkout</button>
          </div>
        </div>

        <Footer></Footer>
      </>
    );
}

export default Cart;
