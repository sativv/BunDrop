import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { calculateTotalPrice } from "../Funcs/Funcs";
import { shopCartContext, orderContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { curOrder, setCurOrder } = useContext(orderContext);
  const { shopCart, setShopCart } = useContext(shopCartContext);
  const [cvc, setCVC] = useState("");
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

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;

      if (
        parseInt(expirationYear, 10) < currentYear ||
        (parseInt(expirationYear, 10) === currentYear &&
          parseInt(expirationMonth, 10) < currentMonth)
      ) {
        setErrorMessage("Please enter a valid expiration date.");
        return;
      }
      // create random delivery time
      //
      const deliveryTimeMinutes = Math.floor(Math.random() * 16) + 20;
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const currentTime = `${hours}:${minutes}`;

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
    <div className="ccContainer">
      <Header />

      {errorMessage && (
        <div>
          <p className="errorMessage">{errorMessage}</p>
        </div>
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <div className="inputsGroup">
              <p className="label">Card Number:</p>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className="telInput"
                placeholder="1234-xxxx-xxxx-xxx"
                title="A 16-digit credit card number is required"
                pattern="[0-9]{16}"
              />
            </div>
            <div className="inputsGroup">
              <p className="label">Expiration Date:</p>
              <div className="expirationInputContainer">
                <input
                  type="text"
                  value={expirationMonth}
                  onChange={(e) => setExpirationMonth(e.target.value)}
                  placeholder="MM"
                  required
                  className="expInputM"
                  title="Please enter the expiration month in MM format"
                  pattern="(0[1-9]|1[0-2])"
                />
                <input
                  type="text"
                  value={expirationYear}
                  onChange={(e) => setExpirationYear(e.target.value)}
                  placeholder="YYYY"
                  required
                  className="expInputY"
                  title="Please enter the expiration year in YYYY format"
                  pattern="[0-9]{4}"
                />
              </div>
            </div>
            <div className="inputsGroup">
              <p className="label">CVC:</p>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                required
                className="telInput cvc"
                placeholder="123"
              />
            </div>
          </div>
          <div className="swishPrice">
            <p>Amount:</p>
            <p>{price.toFixed(2)} €</p>
          </div>
          <button type="submit" className="sendPayButton ccbtn">
            Pay with Credit Card
          </button>
        </form>
        <Link to="/checkout">
          <p className="returnToCart">Return to checkout</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default CreditCardPayment;
