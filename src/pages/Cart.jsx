import Footer from "../components/Footer";
import Header from "../components/Header";
import { shopCartContext } from "../App";
import { useContext } from "react";
import { calculateTotalPrice } from "../Funcs/Funcs";
import CartItem from "../components/CartItem";

function Cart() {
  const { shopCart } = useContext(shopCartContext);
  console.log(shopCart[0]);
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
            <p>{calculateTotalPrice(shopCart)} €</p>
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
