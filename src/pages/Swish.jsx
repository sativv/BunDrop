import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { calculateTotalPrice } from "../Funcs/Funcs";
import { shopCartContext } from "../App";
function Swish() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { shopCart, setShopCart } = useContext(shopCartContext);

  const price = calculateTotalPrice(shopCart);
  const handleSubmit = (event) => {
    // handle number input
    event.preventDefault();
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
            />
          </p>
          <div className="swishPrice">
            <p>Amount</p>
            <p>{price} €</p>
          </div>
          <button type="submit" className="sendPayButton">
            Send Payment Request
          </button>
        </form>

        <p className="returnToCart">return to checkout</p>
      </div>
      <Footer />
    </div>
  );
}

export default Swish;
