import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { calculateTotalPrice } from "../Funcs/Funcs";
import { shopCartContext, orderContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function Swish() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { shopCart, setShopCart } = useContext(shopCartContext);
  const { curOrder, setCurOrder } = useContext(orderContext);
  const nav = useNavigate();

  const price = calculateTotalPrice(shopCart);
  const handleSubmit = (event) => {
    // handle number input
    event.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to send this payment and place your order?"
    );
    if (isConfirmed) {
      console.log("accepted");
      //
      // create random delivery time
      const deliveryTimeMinutes = Math.floor(Math.random() * 16) + 20;

      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const currentTime = `${hours}:${minutes}`;
      // test
      // add randomly gen time to newMinutes
      const newMinutes = minutes + deliveryTimeMinutes;
      const newHours = hours + Math.floor(newMinutes / 60);
      const adjustedMinutes = newMinutes % 60;

      const newTime = `${newHours}:${adjustedMinutes}`;

      // set order context
      const newOrder = {
        items: shopCart,
        deliveryTime: newTime,
      };
      setCurOrder(newOrder);

      // clear cart

      setShopCart([]);

      nav(`/orderstatus`);
    } else {
      event.preventDefault();
      return;
    }
  };

  return (
    <div className="swishContainer">
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="telInput"
              placeholder="0766 12 34 56"
              pattern="[0-9]{10}"
              title="a 10 digit phone number is required"
            />
          </p>
          <div className="swishPrice">
            <p>Amount : </p>
            <p>{price.toFixed(2)} €</p>
          </div>
          <button type="submit" className="sendPayButton">
            Send Payment Request
          </button>
        </form>

        <Link to={"/checkout"}>
          <p className="returnToCart">return to checkout</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Swish;
