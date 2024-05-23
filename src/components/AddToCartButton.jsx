function AddToCartButton({ text, product, userCart }) {
  function addItemToCart(productToAdd) {
    productToAdd = product;
    // add productoadd to users cart
  }
  return (
    <div className="addToCartButtonContainer">
      <button className="addToCartButton">{text}</button>
    </div>
  );
}
export default AddToCartButton;
