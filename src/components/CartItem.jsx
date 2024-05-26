import { shopCartContext } from "../App";
import { addItemToCart } from "../Funcs/Funcs";
import { useContext, useState } from "react";

function CartItem({ product }) {
  const { shopCart, setShopCart } = useContext(shopCartContext);
  const [itemQuantity, setItemQuantity] = useState(null);

  function handleAddItem() {
    if ((itemQuantity = 9)) {
      return;
    } else {
      setItemQuantity(itemQuantity + 1);
    }
  }
  function handleRemoveItem() {
    if ((itemQuantity = 1)) {
      // remove item from shoppingcart
    } else {
      setItemQuantity(itemQuantity - 1);
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
      <p className="price">{product.price * product.qty} €</p>
    </div>
  );
}
export default CartItem;
