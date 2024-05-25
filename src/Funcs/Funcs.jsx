export function addItemToCart(cart, item, count) {
  // add item to cart
}

export function calculateTotalPrice(shoppingCart) {
  // calculate total cost of shopping cart
  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    totalPrice += product.price * product.count;
  });
  return totalPrice;
}
