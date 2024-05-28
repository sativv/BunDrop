import { useContext } from "react";
import { shopCartContext } from "../App";

function CartItem({ product }) {
  const { shopCart, setShopCart } = useContext(shopCartContext);

  const totalPriceValue = (product.qty * product.price).toFixed(2);

  function handleAddItem() {
    const updatedCart = shopCart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    setShopCart(updatedCart);
  }

  function handleRemoveItem() {
    if (product.qty === 1) {
      const updatedCart = shopCart.filter((item) => item.id !== product.id);
      setShopCart(updatedCart);
    } else {
      const updatedCart = shopCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      });
      setShopCart(updatedCart);
    }
  }

  return (
    <div className="cartItem">
      <p className="cartProductName">{product.name}</p>
      <div className="cartItemContainer">
        <button className="cartButton" onClick={handleRemoveItem}>
          -
        </button>
        <p className="quantInput">{product.qty}</p>
        <button className="cartButton" onClick={handleAddItem}>
          +
        </button>
      </div>
      <p className="price">{totalPriceValue} €</p>
    </div>
  );
}

export default CartItem;
