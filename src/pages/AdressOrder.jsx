import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function AdressOrder() {
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  function handleSubmit() {
    nav("/checkout");
  }
  return (
    <>
      <div className="adContainer">
        <Header />
        {errorMessage && (
          <div>
            <p className="errorMessage">{errorMessage}</p>
          </div>
        )}
        <div className="addressFieldsContainer">
          <form onSubmit={handleSubmit}>
            <div className="addressFields">
              <label className="label">Your name</label>
              <input
                type="text"
                className="nameInput"
                placeholder="John Doe"
                title="A name is required"
                required
              />
            </div>
            <div className="addressFields">
              <label className="label">Address</label>
              <input
                type="text"
                required
                placeholder="Streetroad 42"
                title="An address is required"
                className="addressInput"
              />
            </div>
            <div className="addressFields">
              <label className="label">Zipcode</label>
              <input
                type="text"
                required
                placeholder="123 45"
                pattern="[0-9]{5}"
                title="A 5 digit number is required"
                className="zipcodeInput"
              />
            </div>
            <div className="addressFields">
              <label className="label">City</label>
              <input
                type="text"
                required
                placeholder="Kittencity"
                title="A city name is required"
                className="cityInput"
              />
            </div>
            <div className="pmBtnContainer">
              <button className="menuButtons pmBtn">Continue to payment</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AdressOrder;
