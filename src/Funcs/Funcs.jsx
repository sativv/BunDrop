export function addItemToCart(cart, item, quantity) {
  const existingProductIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (existingProductIndex !== -1) {
    // update quantity if item exists
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].qty += quantity;

    // remove item if quantity is 0

    if (updatedCart[existingProductIndex].qty <= 0) {
      updatedCart.splice(existingProductIndex, 1);
    }
    return updatedCart;
  } else {
    // if item is not in cart, add item

    if (quantity > 0) {
      const newProduct = {
        id: item.id,
        price: item.price,
        name: item.name,
        qty: quantity,
        image: item.image,
      };
      return [...cart, newProduct];
    } else {
      return cart;
    }
  }
}

export function calculateTotalPrice(shoppingCart) {
  // calculate total cost of shopping cart
  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    totalPrice += product.price * product.qty;
  });
  return totalPrice;
}
