import Footer from "../components/Footer";
import Header from "../components/Header";

function Cart() {
  return (
    <>
      <Header></Header>
      <div className="cartContainer">
        <div className="cartBackground">
          <div className="cartItems">
            <h1>item 2 </h1>
            <h1>item 2 </h1>
            <h1>item 2 </h1>
            <h1>item 2 </h1>
          </div>
          <hr className="cartHr" />

          <div className="totalPrice">
            <h3>total price</h3>
            <p>150:-</p>
          </div>
          <div className="checkoutButton">
            <button className="menuButtons cbButton">Go to checkout</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;
