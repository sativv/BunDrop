import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { orderContext } from "../App";

function OrderStatus() {
  const nav = useNavigate();
  const { curOrder, setCurOrder } = useContext(orderContext);

  function handleDelivered() {
    setCurOrder(null);
    nav("/ourmenu");
  }

  // Redirect if curOrder doesn't exist
  useEffect(() => {
    if (curOrder === null) {
      nav("/ourmenu");
    }
  }, [curOrder, nav]);

  return (
    <>
      <Header />
      <div className="orderStatusContainer">
        <h1>Order Status</h1>
        <p>Estimated delivery time: {curOrder.deliveryTime}</p>
        <div className="orderStatusItemContainer">
          {curOrder.items?.map((item) => (
            <div key={item.id}>
              <p>
                {item.qty} x {item.name}
              </p>
              <p>{item.price * item.qty} €</p>
              <div className="hrContainer"></div>
            </div>
          ))}
        </div>
        <div className="bottomOrderStatus">
          <div className="hrContainer">
            <hr />
          </div>
          <button onClick={handleDelivered} className="menuButtons">
            Mark as Delivered
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderStatus;
