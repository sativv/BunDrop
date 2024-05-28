import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { calculateTotalPrice } from "../Funcs/Funcs";
import { shopCartContext } from "../App";
import { Link } from "react-router-dom";

function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvc, setCVC] = useState("");
  const { shopCart } = useContext(shopCartContext);

  const price = calculateTotalPrice(shopCart);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle credit card payment submission
    console.log("Credit card payment submitted!");
  };

  return (
    <div className="ccContainer">
      <Header />
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
            <p>{price} €</p>
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
