export function addItemToCart(cart, item, quantity) {
  // add item to cart
  const shopCart = [...cart];
  let newProduct = {
    id: item.id,
    price: item.price,
    name: item.name,
    qty: quantity,
    image: item.image,
  };

  // remove from cart

  shopCart.push(newProduct);
  return shopCart;
}

export function calculateTotalPrice(shoppingCart) {
  // calculate total cost of shopping cart
  let totalPrice = 0;

  shoppingCart.forEach((product) => {
    totalPrice += product.price * product.qty;
  });
  return totalPrice;
}
