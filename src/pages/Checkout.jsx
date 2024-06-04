import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Checkout() {
  return (
    <>
      <Header></Header>
      <div className="checkoutContainer">
        <h2>Choose your payment method</h2>

        <Link to={"/swish"}>
          <img
            src={process.env.PUBLIC_URL + "/images/swishlogo.png"}
            className="swishlogo"
          />
        </Link>
        <Link to={"/credit"}>
          <img
            src={process.env.PUBLIC_URL + "/images/mastercard.svg"}
            className="mastercardlogo"
          />
        </Link>
        <Link to={"/address"}>
          <p className="returnToCart">return</p>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Checkout;
